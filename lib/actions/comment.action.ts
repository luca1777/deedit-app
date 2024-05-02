"use server";

import Comment from "@/database/comment.model";
import { connectToDatabase } from "../mongoose";
import { revalidatePath } from "next/cache";

export async function fetchCommentById(id: string) {
  connectToDatabase();

  try {
    const comment = await Comment.findById(id)
      .populate({
        path: "children",
        model: "Comment",
        populate: {
          path: "children",
          model: "Comment",
        },
      })
      .exec();

    return comment;
  } catch (error: any) {
    throw new Error("Post not found", error);
  }
}

export async function addReplyToComment(
  parentId: string,
  comment: string,
  path: string
) {
  connectToDatabase();

  try {
    // adding a comment
    const parentComment = await Comment.findById(parentId);

    if (!parentComment) {
      throw new Error("Post not found");
    }

    const commentNested = new Comment({
      content: comment,
      parentId: parentId,
    });

    const savedComment = await commentNested.save();

    parentComment.children.push(savedComment._id);

    await parentComment.save();

    revalidatePath(path);
  } catch (error) {
    console.error(error);
    throw new Error("Could not add comment to post");
  }
}
