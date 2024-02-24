"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();

    const keyword = searchRef.current.value;

    if (!keyword) {
      alert("Search keyword is empty");
    } else if (keyword.length < 3) {
      alert(
        "Please be more specific. Search keyword should be at least 3 characters long."
      );
    } else {
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="relative w-[300px]">
        <input
          id="search"
          placeholder="Search for..."
          className="p-2 rounded w-full"
          ref={searchRef}
        />
        <button className="absolute top-1.5 end-2 hover:text-slate-500">
          <MagnifyingGlass size={26} />
        </button>
      </div>
    </form>
  );
};

export default InputSearch;
