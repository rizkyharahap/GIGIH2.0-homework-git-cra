import React from "react";
import Item from "./item";
import "./index.css";

const SongRequestInfo = ({ title, description }) => (
  <div className="song-info">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

// Song Wrapper component
const Song = ({ tracks, error, isLoading }) => {
  if (isLoading)
    return (
      <div className="song-info">
        <div className="loading"></div>
        <h4>Loading ...</h4>
      </div>
    );

  if (error)
    return (
      <SongRequestInfo title={error.message} description={error.description} />
    );

  if (!tracks || tracks.length === 0)
    return (
      <SongRequestInfo
        title="No Results found"
        description="Please make sure your words are spelled correctly or use less or
    different keywords"
      />
    );

  return (
    <div className="song">
      {/* Mapping all tracks */}

      {tracks.map(({ id, album, artists, ...track }) => (
        <Item key={id} album={album} artist={artists[0]} track={track} />
      ))}
    </div>
  );
};

export default Song;
