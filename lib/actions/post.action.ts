"use server";

import Post from "@/database/post.model";
import { connectToDatabase } from "../mongoose";

export async function createPost(params: any) {
  try {
    connectToDatabase();

    const { title, content, category, path } = params;

    const post = await Post.create({
      title,
      content,
      category,
    });
  } catch (error) {}
}
