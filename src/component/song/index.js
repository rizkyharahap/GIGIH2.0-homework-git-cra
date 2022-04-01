import React from "react";
import Message from "../message";
import Spinner from "../spinner";
import "./index.css";
import Item from "./item";

// Song Wrapper component
const Song = ({
  data,
  error,
  isLoading,
  selectedSong = [],
  onSongSelected,
}) => {
  if (isLoading)
    return (
      <Spinner>
        <p>Loading ...</p>
      </Spinner>
    );

  if (error)
    return (
      <Message
        title={error.message}
        description={error.description}
        style={{
          margin: "200px",
        }}
      />
    );

  if (!data || data.length === 0)
    return (
      <Message
        title="No Results found"
        description="Please make sure your words are spelled correctly or use less or
    different keywords"
        style={{
          margin: "200px",
        }}
      />
    );

  return (
    <div className="song">
      {/* Mapping all tracks */}

      {data.map(({ uri, album, artists, ...track }) => {
        const isSelected = selectedSong.includes(uri);

        return (
          <Item key={uri} album={album} artist={artists[0]} track={track}>
            <button
              className="btn btn-action"
              title="Button"
              rel="noreferrer"
              data-type={isSelected ? "selected" : "unselected"}
              onClick={() => onSongSelected(uri)}
            >
              {isSelected ? "Deselect" : "Select"}
            </button>
          </Item>
        );
      })}
    </div>
  );
};

export default Song;
