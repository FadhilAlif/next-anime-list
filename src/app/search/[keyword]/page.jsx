import { getAnimeRes } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const SearchPage = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURIComponent(keyword);

  // API CALL
  const searchAnime = await getAnimeRes("anime", `q=${decodedKeyword}`);

  return (
    <div>
      <section>
        <Header
          title={`Search Results for ${decodedKeyword}`}
          linkTitle="See All"
        />
        <AnimeList api={searchAnime} />
      </section>
    </div>
  );
};

export default SearchPage;
