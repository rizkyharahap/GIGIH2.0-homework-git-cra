const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const scope = process.env.REACT_APP_SPOTIFY_SCOPE;
const redirectURI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;

export const spotifyAuthorizeURL = () => {
  const url = new URL("https://accounts.spotify.com/authorize");

  const params = {
    response_type: "token",
    client_id: encodeURIComponent(clientId),
    scope: encodeURIComponent(scope),
    redirect_uri: redirectURI,
  };

  url.search = new URLSearchParams(params).toString();

  return url.href;
};
