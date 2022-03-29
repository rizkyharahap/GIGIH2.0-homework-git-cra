import React from "react";
import Action from "../action";
import Album from "../album";
import Description from "../description";
import "./index.css";

// Song Item component
const Item = ({ album, artist, track, style }) => {
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

      <Action url={track.external_urls.spotify} target="_blank">
        Play On
      </Action>
    </div>
  );
};

export default Item;
