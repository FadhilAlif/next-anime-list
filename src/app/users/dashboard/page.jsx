import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();

  return (
    <div className="flex flex-col items-center justify-center text-color-primary mt-8">
      <Image
        src={user?.image}
        alt={user?.name}
        width={200}
        height={200}
        className="rounded-full object-cover"
      ></Image>
      <div className="flex flex-col items-center text-center mt-5 gap-1">
        <h3 className="text-xl font-bold">{user?.name}</h3>
        <p>{user?.email}</p>
      </div>
      <div className="flex flex-wrap gap-4 mt-8">
        <Link
          href={"/users/dashboard/collections"}
          className=" bg-color-accent text-color-dark font-bold py-2 px-3.5 rounded-lg"
        >
          Collections
        </Link>
        <Link
          href={"/users/dashboard/comments"}
          className=" bg-color-accent text-color-dark font-bold py-2 px-3.5 rounded-lg"
        >
          Comments
        </Link>
      </div>
    </div>
  );
};

export default Page;
