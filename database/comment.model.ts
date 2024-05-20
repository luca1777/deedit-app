import { Schema, models, model, Document } from "mongoose";

export interface IComment extends Document {
  author: Schema.Types.ObjectId;
  content: string;
  parentId: string;
  likes: number;
  children: Schema.Types.ObjectId[];
  createdAt: Date;
}

const CommentSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: { type: String, required: true },
  parentId: { type: String, required: true },
  likes: { type: Number, default: 0 },
  children: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  createdAt: { type: Date, default: Date.now },
});

const Comment = models.Comment || model("Comment", CommentSchema);

export default Comment;
