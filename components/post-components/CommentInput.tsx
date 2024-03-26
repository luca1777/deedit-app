'use client';
import React, { useState } from 'react';
import ShareIcon from '../icons/ShareIcon';
import { Comment } from './CommentComponent';
import { v4 as uuidv4 } from 'uuid';

interface CommentInputProps {
  addComment: (newComment: Comment) => void;
}

const CommentInput = ({ addComment }: CommentInputProps) => {
  const [commentBody, setCommentBody] = useState('');

  const generateSimpleRandomId = () => uuidv4();

  return (
    <div className="w-full max-w-[1159px] flex items-center relative border">
      <input
        type="text"
        value={commentBody}
        placeholder="What are your thoughts?"
        className="w-full rounded-29xl text-lg p-3 pr-[70px] border"
        onChange={(event) => setCommentBody(event.target.value)}
      />
      <button
        type="submit"
        className="absolute right-[20px] bg-white cursor-pointer"
        onClick={() => {
          addComment({
            body: commentBody,
            id: generateSimpleRandomId(),
            comments: [],
          });
          setCommentBody('');
        }}
      >
        <ShareIcon color="black" />
      </button>
    </div>
  );
};

export default CommentInput;
