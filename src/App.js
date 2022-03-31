import { useState } from "react";
import Container from "./component/container";
import Navbar from "./component/navbar";
import Song from "./component/song";
import { searchTracksAPI } from "./service/api";
import { spotifyAuthorizeURL } from "./service/authorize";

const App = () => {
  // Check if has access token
  const params = new URLSearchParams(window.location.hash.replace("#", "?"));
  const accessToken = params.get("access_token");

  // Set access token to localStorage
  if (accessToken) localStorage.setItem("spotify-token", accessToken);

  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    // Show Loading
    setIsLoading(true);

    try {
      const tracksResponse = await searchTracksAPI({ query });

      // Throw error if have error
      if (tracksResponse.error) throw tracksResponse.error;

      // Assign to state tracks
      // console.log("Tracks : ", tracksResponse);
      setTracks(tracksResponse.tracks?.items || []);
      setError(null);
    } catch (error) {
      console.error("Error get tracks : ", error);

      const errorData = {
        description: error.message,
      };

      // Check spesifict error
      switch (error.status) {
        case 400:
          errorData.message = "Enter search keyword";
          break;
        case 401:
          errorData.message = "Unauthorized";
          break;
        case 403:
          errorData.message = "Forbidden";
          break;
        case 429:
          errorData.message = "The app has exceeded its rate limits";
          break;
        default:
          errorData.message = "Oops something wrong !";
          break;
      }

      setError(errorData);
    } finally {
      // Hide loading
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar authorizeUrl={spotifyAuthorizeURL()} onSearch={handleSearch} />

      <Container>
        <Song tracks={tracks} error={error} isLoading={isLoading} />
      </Container>
    </>
  );
};

export default App;
