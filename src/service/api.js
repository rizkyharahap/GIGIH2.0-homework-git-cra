export const searchTracksAPI = async ({
  query,
  type = "track",
  limit = 12,
  offset = 0,
}) => {
  const url = new URL("https://api.spotify.com/v1/search");

  const params = {
    q: encodeURIComponent(query),
    type: encodeURIComponent(type),
    limit: encodeURIComponent(limit),
    offset: encodeURIComponent(offset),
  };

  url.search = new URLSearchParams(params).toString();

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("spotify-token")}`,
      "Content-Type": "application/json",
    },
  });

  return await response.json();
};
