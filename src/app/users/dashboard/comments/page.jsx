import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });
  console.log({ comments });

  return (
    <div className="grid grid-cols-1">
      {comments.map((comment) => {
        return (
          <Link
            href={`/anime/${comment.anime_mal_id}`}
            key={comment.id}
            className="bg-color-primary text-color-dark p-4"
          >
            <p className="text-sm">{comment.anime_title}</p>
            <p className="italic">{comment.comment}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Page;
