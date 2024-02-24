import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeRes, getNestedAnimeRes, reproduce } from "../libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeRes("top/anime", "limit=8");
  let recommendedAnime = await getNestedAnimeRes(
    "recommendations/anime",
    "entry"
  );

  recommendedAnime = reproduce(recommendedAnime, 4);

  return (
    <div>
      {/* Most Popular Anime */}
      <section>
        <Header title="Most Popular" linkHref="/popular" linkTitle="See All" />
        <AnimeList api={topAnime} />
        <Header
          title="Recommended"
          linkHref="/recommended"
          linkTitle="See All"
        />
        <AnimeList api={recommendedAnime} />
      </section>
    </div>
  );
};

export default Page;
