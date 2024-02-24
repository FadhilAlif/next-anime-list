import React from "react";
import prisma from "@/libs/prisma";

const CommentBox = async () => {
  const comments = await prisma.comment.findMany({});
  // console.log(comments);

  return (
    <div className="p-4 flex gap-4">
      {comments.map((comment) => {
        return (
          <div className="p-2 text-color-dark bg-color-primary rounded">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-color-dark">
                  {comment.username}
                </p>
                <p className="text-sm">
                  <time>{new Date(comment.created_at).toLocaleString()}</time>
                </p>
              </div>
            </div>
            <p className="text-gray-500 dark:text-gray-400">
              {comment.comment}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CommentBox;
