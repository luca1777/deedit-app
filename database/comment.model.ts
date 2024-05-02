import { Schema, models, model, Document } from "mongoose";

export interface IComment extends Document {
  content: string;
  parentId: string;
  children: Schema.Types.ObjectId[];
  createdAt: Date;
}

const CommentSchema = new Schema({
  content: { type: String, required: true },
  parentId: { type: String, required: true },
  children: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  createdAt: { type: Date, default: Date.now },
});

const Comment = models.Comment || model("Comment", CommentSchema);

export default Comment;
