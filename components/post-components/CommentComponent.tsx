'use client';
import React, { useState } from 'react';
import CommentItem from './CommentItem';
import CommentInput from './CommentInput';

export interface Comment {
  body: string;
  id: string;
  comments: Array<Comment>;
}

const dummyComments: Array<Comment> = [
  {
    body: 'This is first comment',
    id: '1',
    comments: [],
  },
  {
    body: 'This is second comment',
    id: '2',
    comments: [],
  },
  {
    body: 'This is third comment',
    id: '3',
    comments: [],
  },
];

const CommentComponent = () => {
  const [comments, setComments] = useState(dummyComments);
  console.log(comments);

  const addComment = (newComment: Comment) => {
    setComments((prev) => [newComment, ...prev]);
  };

  const addReplyToComment = (parentId, newComment) => {
    setComments((prevComments) => {
      const findAndUpdateComment = (comments) => {
        return comments.map((comment) => {
          if (comment.id === parentId) {
            return {
              ...comment,
              comments: [...comment.comments, newComment],
            };
          } else if (comment.comments.length) {
            return {
              ...comment,
              comments: findAndUpdateComment(comment.comments),
            };
          } else {
            return comment;
          }
        });
      };
      return findAndUpdateComment(prevComments);
    });
  };


  return (
    <div className="w-full flex flex-col justify-center items-center gap-8">
      <CommentInput addComment={addComment} />
      <div className="w-full flex flex-col gap-4 mt-4 justify-center items-center">
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            addReplyToComment={addReplyToComment}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentComponent;
