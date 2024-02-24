import CollectionButton from "@/components/AnimeList/CollectionButton";
import CommentBox from "@/components/AnimeList/CommentBox";
import CommentInput from "@/components/AnimeList/CommentInput";
import { getAnimeRes } from "@/libs/api-libs";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import VideoPlayer from "@/utils/VideoPlayer";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const detailAnime = await getAnimeRes(`anime/${id}`);
  const user = await authUserSession();

  const collection = await prisma.collection.findFirst({
    where: {
      user_email: user?.email,
      anime_mal_id: id,
    },
  });
  // console.log({ collection });

  return (
    <div className="pt-4 px-4">
      <h3 className="text-3xl text-color-primary font-bold">
        {detailAnime.data.title} - {detailAnime.data.year}
      </h3>
      {!collection && user && (
        <CollectionButton
          anime_mal_id={id}
          user_email={user?.email}
          anime_title={detailAnime.data.title}
          anime_image={detailAnime.data.images.webp.image_url}
        />
      )}
      <div className="pt-4 px-4 sm:flex-nowrap flex flex-wrap gap-2 text-color-primary">
        <Image
          src={detailAnime.data.images.webp.image_url}
          alt={detailAnime.data.title}
          width={200}
          height={200}
          className="w-full object-cover rounded"
        />
        <p className="text-justify text-xl">{detailAnime.data.synopsis}</p>
      </div>
      <div className="p-4">
        <h3 className="text-2xl  text-color-primary font-semibold">Comments</h3>
        <CommentBox anime_mal_id={id} />
        {user && (
          <CommentInput
            anime_mal_id={id}
            user_email={user?.email}
            username={user?.name}
            anime_title={detailAnime.data.title}
          />
        )}
      </div>
      <div>
        <VideoPlayer youtubeId={detailAnime.data.trailer.youtube_id} />
      </div>
    </div>
  );
};

export default Page;
