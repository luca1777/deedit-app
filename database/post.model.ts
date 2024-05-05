import { Schema, models, model, Document } from "mongoose";

export interface IPost extends Document {
  content: string;
  category?: string | null;
  parentId?: string | null;
  likes: number;
  children: Schema.Types.ObjectId[];
  createdAt: Date;
}

const PostSchema = new Schema({
  content: { type: String, required: true },
  category: { type: String },
  createdAt: { type: Date, default: Date.now },
  parentId: { type: String },
  likes: { type: Number, default: 0 },
  children: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

const Post = models.Post || model("Post", PostSchema);

export default Post;
