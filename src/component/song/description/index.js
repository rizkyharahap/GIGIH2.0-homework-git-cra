import React from "react";
import "./index.css";

/**
 * For Song Description component
 * @param {string} title Title of Song
 * @param {string} artist Artist of Song
 * @param {object} style
 */
const SongDescription = ({ title, artist, style }) => {
  return (
    <div className="song-description" style={style}>
      <h2>{title}</h2>
      <p>{artist}</p>

      <button className="btn btn-song" title="Button">
        Select
      </button>
    </div>
  );
};

export default SongDescription;
