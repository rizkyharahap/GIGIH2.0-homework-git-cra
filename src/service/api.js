export const searchTracksAPI = async ({
  token,
  query,
  type = "track",
  limit = 12,
  offset = 0,
}) => {
  const url = new URL("https://api.spotify.com/v1/search");

  const params = {
    q: query,
    type,
    limit,
    offset,
  };

  url.search = new URLSearchParams(params).toString();

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return await response.json();
};

export const getCurrentUserProfileAPI = async ({ token }) => {
  const url = new URL("https://api.spotify.com/v1/me");

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return await response.json();
};

export const createPlaylistAPI = async ({ token, user_id, data }) => {
  const url = new URL(`https://api.spotify.com/v1/users/${user_id}/playlists`);

  const body = {
    ...data,
    public: false,
    collaborative: false,
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await response.json();
};

export const addPlaylistItemsAPI = async ({
  token,
  playlist_id,
  uris = [],
}) => {
  const url = new URL(
    `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`
  );

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ uris }),
  });

  return await response.json();
};
