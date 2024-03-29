export const getAnimeRes = async (resource, query) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const data = await res.json();
  return data;
};

export const getNestedAnimeRes = async (resource, objectProperty) => {
  const res = await getAnimeRes(resource);
  return res.data.flatMap((item) => item[objectProperty]);
};

export const reproduce = (data, gap) => {
  const first = ~~(Math.random() * (data.length - gap) + 1);
  const last = first + gap;

  const res = {
    data: data.slice(first, last),
  };

  return res;
};
