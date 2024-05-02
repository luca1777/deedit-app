import { Schema, models, model, Document } from "mongoose";

export interface IPost extends Document {
  content: string;
  category?: string | null;
  parentId?: string | null;
  children: Schema.Types.ObjectId[];
  createdAt: Date;
}

const PostSchema = new Schema({
  content: { type: String, required: true },
  category: { type: String },
  createdAt: { type: Date, default: Date.now },
  parentId: { type: String },
  children: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

const Post = models.Post || model("Post", PostSchema);

export default Post;
