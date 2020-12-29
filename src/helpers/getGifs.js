export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=3&api_key=FJ8x1HI7nMlJg3u9Pq0s3MUXFchEJp5x`;
  const respuesta = await fetch(url);
  const { data } = await respuesta.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};
