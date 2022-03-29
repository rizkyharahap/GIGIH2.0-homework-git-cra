import { Component } from "react";
import Container from "./component/container";
import Navbar from "./component/navbar";
import Song from "./component/song";
import { searchTracksAPI } from "./service/api";
import { spotifyAuthorizeURL } from "./service/authorize";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      isLoading: false,
      error: null,
    };
  }

  handleSearch = async (query) => {
    // Show Loading
    this.setState({ isLoading: true });

    try {
      const tracksResponse = await searchTracksAPI({ query });

      // Throw error if have error
      if (tracksResponse.error) throw tracksResponse.error;

      // Assign to state tracks
      // console.log("Tracks : ", tracksResponse);
      this.setState({ tracks: tracksResponse.tracks.items, error: null });
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

      this.setState({ error: errorData });
    } finally {
      // Hide loading
      this.setState({ isLoading: false });
    }
  };

  render() {
    // Check if has access token
    const params = new URLSearchParams(window.location.hash.replace("#", "?"));
    const accessToken = params.get("access_token");

    // Set access token to localStorage
    if (accessToken) localStorage.setItem("spotify-token", accessToken);

    return (
      <>
        <Navbar
          authorizeUrl={spotifyAuthorizeURL()}
          onSearch={this.handleSearch}
        />

        <Container>
          <Song {...this.state} />
        </Container>
      </>
    );
  }
}

export default App;
