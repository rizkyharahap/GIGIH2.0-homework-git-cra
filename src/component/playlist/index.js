import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Check, X } from 'tabler-icons-react';
import { addPlaylistItemsAPI, createPlaylistAPI } from '../../service/api';
import { apiErrorHandler } from '../../service/api-error-handler';
import Message from '../message';
import Modal from '../modal';
import Spinner from '../spinner';
import FormPlaylist from './form';
import styles from './playlist.module.scss';
import { showNotification } from '@mantine/notifications';

const Playlist = ({ user_id, selectedTracks = [] }) => {
  const accessToken = useSelector((state) => state.global.accessToken);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playlist, setPlaylist] = useState({
    data: {},
    isLoading: false,
    error: null,
  });

  // For handle modal
  const handleToogleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const createPlaylist = async (data) => {
    // Show Loading
    setPlaylist((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      const createPlaylist = await createPlaylistAPI({
        token: accessToken,
        user_id,
        data,
      });

      // Throw error if have error
      if (createPlaylist.error) throw createPlaylist.error;

      const playlistId = createPlaylist?.id;

      if (!playlistId) throw new Error('Create playlist failed');

      console.log('Create Playlist Success: ', createPlaylist);

      // Add selected song to playlist
      const addItemPLaylist = await addPlaylistItemsAPI({
        token: accessToken,
        playlist_id: playlistId,
        uris: selectedTracks,
      });

      if (addItemPLaylist.error) throw addItemPLaylist.error;

      console.log('Add item to playlist : ', addItemPLaylist);

      // Assign to state users
      setPlaylist((prev) => ({
        ...prev,
        data: createPlaylist,
        error: null,
      }));

      showNotification({
        title: 'Create Playlist Success',
        message: 'Please check playlist on your own Spotify',
        icon: <Check />,
        color: 'green',
      });

      setIsModalOpen(false);
    } catch (error) {
      console.error('Error get users : ', error);

      setPlaylist((prev) => ({
        ...prev,
        error: apiErrorHandler(error),
      }));

      showNotification({
        title: 'Failed create playlist',
        message: error.message,
        icon: <X />,
        color: 'red',
      });
    } finally {
      // Hide loading
      setPlaylist((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };

  return (
    <>
      <button className={`btn ${styles.btn__playlist}`} onClick={handleToogleModal}>
        <div className={styles.btn__playlist__icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="currentColor"
            enableBackground="true"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
        </div>

        <span>Create Playlist</span>
      </button>

      <Modal title="Create Playlist" isOpen={isModalOpen}>
        {playlist.isLoading && <Spinner />}
        <Modal.Header title="Create Playlist" onClose={handleToogleModal} />
        <Modal.Content>
          {!Array.isArray(selectedTracks) || selectedTracks.length === 0 ? (
            <Message title="Not song selected" description="Please select at least one song !" />
          ) : (
            <FormPlaylist onSubmit={createPlaylist} />
          )}
        </Modal.Content>
      </Modal>
    </>
  );
};

export default Playlist;
