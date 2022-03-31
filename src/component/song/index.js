import React, { useState } from "react";
import Item from "./item";
import "./index.css";
import Action from "./action";

const SongRequestInfo = ({ title, description }) => (
  <div className="song-info">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

// Song Wrapper component
const Song = ({ tracks, error, isLoading }) => {
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

      {tracks.map(({ uri, album, artists, ...track }) => {
        const isSelected = selectedSong.includes(uri);

        return (
          <Item key={uri} album={album} artist={artists[0]} track={track}>
            <Action
              onClick={() => handleSelectedSong(uri)}
              data-type={isSelected ? "selected" : "unselected"}
            >
              {isSelected ? "Deselect Song" : "Select Song"}
            </Action>
          </Item>
        );
      })}
    </div>
  );
};

export default Song;
