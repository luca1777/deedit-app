"use server";

import Post from "@/database/post.model";
import { connectToDatabase } from "../mongoose";
import User from "@/database/user.model";

const SearchableTypes = ["post", "user"];

export interface SearchParams {
  query?: string | null;
  type?: string | null;
}

export async function globalSearch(params: SearchParams) {
  try {
    await connectToDatabase();

    const { query, type } = params;
    const regexQuery = { $regex: query, $options: "i" };

    let results = [];

    const modelsAndTypes = [
      { model: Post, searchField: "content", type: "post" },
      { model: User, searchField: "username", type: "user" },
    ];

    const typeLower = type?.toLowerCase();

    if (!typeLower || !SearchableTypes.includes(typeLower)) {
      // SEARCH ACROSS EVERYTHING

      for (const { model, searchField, type } of modelsAndTypes) {
        const queryResults = await model
          .find({ [searchField]: regexQuery })
          .limit(2);

        results.push(
          ...queryResults.map((item) => ({
            title: item[searchField],
            type,
            id: type === "user" ? item.clerkId : item._id,
          }))
        );
      }
    } else {
      // SEARCH IN THE SPECIFIED MODEL TYPE
      const modelInfo = modelsAndTypes.find((item) => item.type === type);

      console.log({ modelInfo, type });
      if (!modelInfo) {
        throw new Error("Invalid search type");
      }

      const queryResults = await modelInfo.model
        .find({ [modelInfo.searchField]: regexQuery })
        .limit(8);

      results = queryResults.map((item) => ({
        title: item[modelInfo.searchField],
        type,
        id: type === "user" ? item.clerkId : item._id,
      }));
    }

    return JSON.stringify(results);
  } catch (error) {
    console.log(`Error fetching global results, ${error}`);
    throw error;
  }
}
