"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/utils/HeaderMenu";
import Pagination from "@/utils/Pagination";
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { getAnimeRes } from "../../libs/api-libs";

const PopularPage = async () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const popularAnime = await getAnimeRes("top/anime", `page=${page}`);
    setTopAnime(popularAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`Most Popular Anime #${page}`} />
      <AnimeList api={topAnime} />
      <Pagination
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
};

export default PopularPage;
