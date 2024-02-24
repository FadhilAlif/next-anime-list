import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Dashboard/Header";
import prisma from "@/libs/prisma";
import { authUserSession } from "@/libs/auth-libs";

const Page = async () => {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });
  console.log({ collection });

  return (
    <section className="p-5 w-full">
      <Header title={"My Collections"} />
      <div className="grid lg:grid-cols-4 sm:gridcols-2 gap-4 mt-8">
        {collection.map((collect, index) => {
          return (
            <Link
              key={index}
              href={`/anime/${collect.anime_mal_id}`}
              className="relative"
            >
              <Image
                src={collect?.anime_image}
                width={350}
                height={350}
                className="w-full"
              />
              <div className="absolute bottom-0 w-full flex items-center justify-center bg-color-accent h-16">
                <h5 className="text-xl text-center font-semibold ">
                  {collect?.anime_title}
                </h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
