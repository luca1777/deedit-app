"use server";

import Post from "@/database/post.model";
import { connectToDatabase } from "../mongoose";
import { revalidatePath } from "next/cache";

export async function createPost(params: any) {
  try {
    connectToDatabase();

    const { content, category } = params;

    const post = await Post.create({
      content,
      category,
    });

    revalidatePath("/");
  } catch (error) {}
}

export async function fetchPosts(pageNumber = 1, pageSize = 20) {
  connectToDatabase();

  const skipAmount = pageSize * (pageNumber - 1);

  const posts = Post.find({ parentId: { $in: [null, undefined] } })
    .sort({ createdAt: -1 })
    .skip(skipAmount)
    .limit(pageSize)
    .populate({
      path: "children",
      model: "Post",
      populate: {
        path: "children",
        model: "Post",
        populate: {
          path: "children",
          model: "Post",
        },
      },
    });

  const totalPosts = await Post.countDocuments({
    parentId: { $in: [null, undefined] },
  });

  const postsData = await posts.exec();

  const isNext = totalPosts > skipAmount + postsData.length;

  return { posts: postsData, isNext };
}

export async function fetchPostById(id: string) {
  connectToDatabase();

  try {
    const post = await Post.findById(id)
      .populate({
        path: "children",
        model: "Post",
        populate: {
          path: "children",
          model: "Post",
          populate: {
            path: "children",
            model: "Post",
          },
        },
      })
      .exec();

    return post;
  } catch (error: any) {
    throw new Error("Post not found", error);
  }
}

export async function addCommentToPost(
  postId: string,
  comment: string,
  path: string
) {
  connectToDatabase();

  try {
    // adding a comment
    const originalPost = await Post.findById(postId);

    if (!originalPost) {
      throw new Error("Post not found");
    }

    const commentPost = new Post({
      content: comment,
      parentId: postId,
    });

    const savedComment = await commentPost.save();

    originalPost.children.push(savedComment._id);

    await originalPost.save();

    revalidatePath(path);
  } catch (error) {
    console.error(error);
    throw new Error("Could not add comment to post");
  }
}
