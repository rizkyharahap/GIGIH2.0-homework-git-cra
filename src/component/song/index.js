import React from "react";
import Action from "./action";
import Album from "./album";
import Description from "./description";
import "./index.css";

// Song Item component
const SongItem = ({ album, artist, track, style }) => {
  return (
    <div className="song-item" style={style}>
      {/* Album cover  */}
      <Album images={album.images} title={album.name} />

      {/* Description Album  */}
      <Description
        artist={artist.name}
        title={track.name}
        year={new Date(album.release_date).getFullYear()}
        duration={new Date(track.duration_ms).toISOString().substr(14, 5)}
      />

      <Action url={track.external_urls.spotify} />
    </div>
  );
};

// Song Wrapper component
const Song = ({ tracks }) => {
  return (
    <div className="song">
      {/* Mapping all tracks */}

      {tracks.map(({ id, album, artists, ...track }) => (
        <SongItem key={id} album={album} artist={artists[0]} track={track} />
      ))}
    </div>
  );
};

export default Song;
