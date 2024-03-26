'use client';
import React, { useState } from 'react';
import CommentInput from './CommentInput';
import { Comment } from './CommentComponent';

interface CommentItemProps {
  comment: Comment;
  addReplyToComment: (parentId: string, newComment: Comment) => void;
  comments?: Array<Comment>;
}

const CommentItem = ({ comment, addReplyToComment }: CommentItemProps) => {
  const [comments, setComments] = useState(comment.comments);
  const [isReplying, setIsReplying] = useState(false);

  const addComment = (newComment: Comment) => {
    addReplyToComment(comment.id, newComment);
    setComments((prev) => [newComment, ...prev]);
  };

  return (
    <div className="w-full max-w-[1159px] box-border flex flex-col border-2 rounded-md bg-white text-black text-xl gap-4 p-3 border-solid">
      <span>{comment.body}</span>
      {isReplying ? (
        <button
          className="border-[1px] rounded-full w-20 py-2"
          onClick={() => setIsReplying(false)}
        >
          Cancel
        </button>
      ) : (
        <button
          className="border-[1px] rounded-full w-20 py-2"
          onClick={() => setIsReplying(true)}
        >
          Reply
        </button>
      )}
      {isReplying && <CommentInput addComment={addComment} />}
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          addReplyToComment={addReplyToComment}
          comment={comment}
        />
      ))}
    </div>
  );
};

export default CommentItem;
