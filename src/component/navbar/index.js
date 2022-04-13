import { Navbar as BaseNavbar } from '@mantine/core';
import { useSelector } from 'react-redux';
import { useGetCurrentUserProfileQuery } from '../../redux/api/userApi';
import Playlist from '../playlist';

const Navbar = () => {
  const { isNavbarOpen, accessToken } = useSelector((state) => state.global);
  const { selectedTracks } = useSelector((state) => state.track);

  const { data: user } = useGetCurrentUserProfileQuery('', {
    skip: !accessToken,
  });

  return (
    <BaseNavbar p="md" hiddenBreakpoint="sm" hidden={!isNavbarOpen} width={{ sm: 200, lg: 250 }}>
      <Playlist user_id={user?.id} selectedTracks={selectedTracks} />
    </BaseNavbar>
  );
};

export default Navbar;
