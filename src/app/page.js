import AnimeList from "./components/AnimeList";
import Link from "next/link";

const Home = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const anime = await res.json();
  console.log(anime.data);

  return (
    <div>
      <div className="p-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Most Popular</h1>
        <Link
          href={"/popular"}
          className="md:text-xl text-md underline hover:text-indigo-500 transition-all"
        >
          See All
        </Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-5">
        {anime.data.map((data) => {
          return (
            <div key={data.mal_id} className="shadow-xl">
              <AnimeList
                id={data.mal_id}
                title={data.title}
                images={data.images.webp.image_url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
