import React from "react";
import SongAlbum from "./album";
import SongDescription from "./description";
import "./index.css";

const Song = ({ album, artists, name, style }) => {
  return (
    <div className="song" style={style}>
      {/* Album cover  */}
      <SongAlbum images={album.images} title={name} />

      {/* Description Album  */}
      <SongDescription artist={artists[0].name} title={album.name} />
    </div>
  );
};

export default Song;
