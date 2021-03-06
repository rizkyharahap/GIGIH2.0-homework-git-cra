import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import TrackList from '../component/tracks';
import { useSearchTrackQuery } from '../redux/api/trackApi';
import { addSelectedTrack, removeSelectedTrack } from '../redux/slices/trackSlice';
import { apiErrorHandler } from '../service/api-error-handler';

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  // Get query search
  const params = new URLSearchParams(location.search);
  const searchQuery = params.get('q');

  const { data, isLoading, error } = useSearchTrackQuery(
    searchQuery ? { query: searchQuery } : skipToken,
  );

  const { selectedTracks } = useSelector((state) => state.track);

  // Handle for select or deselect song
  const handleSelectedSong = useCallback(
    (value) => {
      // Check for selected song
      const indexSelectedSong = selectedTracks.indexOf(value);

      // When song not selected
      if (indexSelectedSong < 0) {
        // append to new selected song
        dispatch(addSelectedTrack(value));
      } else {
        // remove from selected song with index of selected song
        dispatch(removeSelectedTrack(indexSelectedSong));
      }
    },
    [dispatch, selectedTracks],
  );

  return (
    <TrackList
      data={data}
      error={error && apiErrorHandler(error)}
      isLoading={isLoading}
      selectedSong={selectedTracks}
      onSongSelected={handleSelectedSong}
    />
  );
};

export default Home;
