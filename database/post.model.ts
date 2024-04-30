import { Schema, models, model, Document } from "mongoose";

export interface IPost extends Document {
  title: string;
  content: string;
  category: string;
  createdAt: Date;
}

const PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Post = models.Post || model("Post", PostSchema);

export default Post;
