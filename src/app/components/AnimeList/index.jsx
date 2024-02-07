import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ id, title, images }) => {
  return (
    <Link href={`/details/${id}`} className="cursor-pointer">
      <Image
        src={images}
        alt="anime image"
        width={350}
        height={350}
        className="w-full max-h-64 object-cover"
      />
      <h3 className="md:text-xl font-bold p-4 text-md">{title}</h3>
    </Link>
  );
};

export default AnimeList;
