import tracks from "./assets/tracks/data";
import Container from "./component/container";
import Song from "./component/song";

function App() {
  return (
    <Container>
      <Song tracks={tracks} />
    </Container>
  );
}

export default App;
