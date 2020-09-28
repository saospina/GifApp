export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=3&api_key=PJi6cCHfF874UVfVHBi8Bfonr86rr5c0`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map(({ id, title, images }) => {
    return {
      id,
      title,
      url: images?.downsized_medium.url
    };
  });

  return gifs;
};
