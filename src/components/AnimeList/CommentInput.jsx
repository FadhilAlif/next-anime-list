"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CommentInput = ({
  anime_mal_id,
  user_email,
  username,
  anime_title,
  created_at,
}) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);
  const router = useRouter();

  const handleInput = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const handlePost = async (e) => {
    e.preventDefault();

    const data = {
      anime_mal_id,
      user_email,
      comment,
      username,
      anime_title,
      created_at,
    };
    // console.log({ data });

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const postComment = await response.json();
    // console.log({ collection });
    if (postComment.isCreated) {
      setIsCreated(true);
      setComment("");
      router.refresh();
    }
    return;
  };

  return (
    <div className="flex flex-col gap-4">
      {isCreated && (
        <p className="text-md text-color-primary">Comment sent...</p>
      )}
      <textarea
        onChange={handleInput}
        value={comment}
        className="w-full h-32 p-4 rounded text-color-dark text-lg font-semibold"
        placeholder="Add a comment"
      />
      <button
        className="w-40 py-2 px-1 rounded bg-color-accent text-color-dark text-md font-semibold hover:text-color-primary transition-all"
        onClick={handlePost}
      >
        Add Comment
      </button>
    </div>
  );
};

export default CommentInput;
