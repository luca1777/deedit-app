"use server";

import Post from "@/database/post.model";
import { connectToDatabase } from "../mongoose";
import { revalidatePath } from "next/cache";
import Comment from "@/database/comment.model";
import { exec } from "child_process";

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
      model: "Comment",
    });

  const totalPosts = await Post.countDocuments({
    parentId: { $in: [null, undefined] },
  });

  const postsData = await posts.exec();

  const isNext = totalPosts > skipAmount + postsData.length;

  return { posts: postsData, isNext };
}

export async function fetchPostsByCategory(
  category,
  pageNumber = 1,
  pageSize = 20
) {
  connectToDatabase();

  const skipAmount = pageSize * (pageNumber - 1);

  const posts = Post.find({
    category: category,
    parentId: { $in: [null, undefined] },
  })
    .sort({ createdAt: -1 })
    .skip(skipAmount)
    .limit(pageSize)
    .populate({
      path: "children",
      model: "Comment",
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
        model: "Comment",
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
    const parentPost = await Post.findById(postId);

    if (!parentPost) {
      throw new Error("Post not found");
    }

    const commentPost = new Comment({
      content: comment,
      parentId: postId,
    });

    const savedComment = await commentPost.save();

    parentPost.children.push(savedComment._id);

    await parentPost.save();

    revalidatePath(path);
  } catch (error) {
    console.error(error);
    throw new Error("Could not add comment to post");
  }
}