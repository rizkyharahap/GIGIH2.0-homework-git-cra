import "./App.css";
import single from "./assets/data/single";

function App() {
  const { album, artists, name } = single;

  return (
    <main className="container">
      {/* Playlist card */}
      <div className="card-playlist">
        {/* Album cover  */}
        <picture className="playlist-album">
          <source
            media={`(min-width:${album.images[1].width})`}
            srcset={album.images[1].url}
          />
          <source
            media={`(min-width:${album.images[2].width})`}
            srcset={album.images[2].url}
          />
          <img src={album.images[0].url} alt={name} />
        </picture>

        {/* Description Album  */}
        <div className="playlist-description">
          <h2>{album.name}</h2>
          <p>{artists[0].name}</p>

          <button className="btn btn-playlist" title="Button">
            Select
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
