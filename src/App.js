import single from "./assets/data/single";
import Container from "./component/container";
import Song from "./component/song";

function App() {
  const { album, artists, name } = single;

  return (
    <Container>
      {/* Song component */}
      <Song album={album} artists={artists} name={name} />
    </Container>
  );
}

export default App;
