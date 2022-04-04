import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "./component/container";
import Navbar from "./component/navbar";
import Playlist from "./component/playlist";
import Song from "./component/song";
import { setAccessToken } from "./redux/slices/globalSlice";
import { getCurrentUserProfileAPI, searchTracksAPI } from "./service/api";
import { apiErrorHandler } from "./service/api-error-handler";
import { spotifyAuthorizeURL } from "./service/authorize";

const App = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.global.accessToken);
  // Check if has access token
  const params = new URLSearchParams(window.location.hash.replace("#", "?"));
  const token = params.get("access_token");

  const [tracks, setTracks] = useState({
    data: [],
    isLoading: false,
    error: null,
  });

  const [user, setUser] = useState({
    data: {},
    isLoading: false,
    error: null,
  });

  const [selectedSong, setSelectedSong] = useState([]);

  // Handle for select or deselect song
  const handleSelectedSong = (value) => {
    // Check for selected song
    const indexSelectedSong = selectedSong.indexOf(value);

    const newSelectedSong = [...selectedSong];

    // When song not selected
    if (indexSelectedSong < 0) {
      // append to new selected song
      newSelectedSong.push(value);
    } else {
      // remove from selected song with index of selected song
      newSelectedSong.splice(indexSelectedSong, 1);
    }

    setSelectedSong(newSelectedSong);
  };

  const getSearchTracks = async (query) => {
    // Show Loading
    setTracks((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      const tracksResponse = await searchTracksAPI({
        token: accessToken,
        query,
      });

      // Throw error if have error
      if (tracksResponse.error) throw tracksResponse.error;

      // Assign to state tracks
      setTracks((prev) => ({
        ...prev,
        data: tracksResponse.tracks?.items || [],
        error: null,
      }));
    } catch (error) {
      console.error("Error get tracks : ", error);

      setTracks((prev) => ({
        ...prev,
        error: apiErrorHandler(error),
      }));
    } finally {
      // Hide loading
      setTracks((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };

  const getCurrentUserProfile = async (token) => {
    // Show Loading
    setUser((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      const userResponse = await getCurrentUserProfileAPI({
        token,
      });

      // Throw error if have error
      if (userResponse.error) throw userResponse.error;
      if (!userResponse.id) throw userResponse.error;

      // Assign to state users
      setUser((prev) => ({
        ...prev,
        data: userResponse,
        error: null,
      }));
    } catch (error) {
      console.error("Error get users : ", error);

      setUser((prev) => ({
        ...prev,
        error: apiErrorHandler(error),
      }));
    } finally {
      // Hide loading
      setUser((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };

  // Set access token to redux
  useEffect(() => {
    if (token) dispatch(setAccessToken(token));
  }, [dispatch, token]);

  useEffect(() => {
    // Load user when access token is available
    if (accessToken) getCurrentUserProfile(accessToken);
  }, [accessToken]);

  return (
    <>
      <Navbar authorizeUrl={spotifyAuthorizeURL()} onSearch={getSearchTracks} />

      <Container>
        <Playlist user_id={user.data.id} selectedSong={selectedSong} />
        <Song
          {...tracks}
          selectedSong={selectedSong}
          onSongSelected={handleSelectedSong}
        />
      </Container>
    </>
  );
};

export default App;
