"use client";

import { useState } from "react";

const CollectionButton = ({
  anime_mal_id,
  user_email,
  anime_image,
  anime_title,
}) => {
  const [isCreated, setIsCreated] = useState(false);

  const handleCollection = async (e) => {
    e.preventDefault();

    const data = { anime_mal_id, user_email, anime_image, anime_title };
    // console.log({ data });

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const collection = await response.json();
    // console.log({ collection });
    if (collection.isCreated) {
      setIsCreated(true);
    }
    return;
  };

  return (
    <>
      {isCreated ? (
        <p className="text-md text-color-primary">Added to collection</p>
      ) : (
        <button
          onClick={handleCollection}
          className="mt-4 ml-4 px-2 py-1 text-color-secondary text-md font-semibold bg-color-accent rounded hover:text-color-primary "
        >
          Add To Collection
        </button>
      )}
    </>
  );
};

export default CollectionButton;
