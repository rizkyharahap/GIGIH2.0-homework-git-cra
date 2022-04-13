import { Button, MediaQuery, Menu, Text } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import LogoutIcon from 'tabler-icons-react/dist/icons/logout';
import { useGetCurrentUserProfileQuery } from '../../../redux/api/userApi';
import { clearAccessToken } from '../../../redux/slices/globalSlice';
import Avatar from '../../avatar';

const ButtonAuth = ({ authorizeUrl }) => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.global.accessToken);
  const { data: user } = useGetCurrentUserProfileQuery('', {
    skip: !accessToken,
  });

  // Clear access token on logout
  const handleLogout = () => {
    dispatch(clearAccessToken());
  };

  if (accessToken && user)
    return (
      <Menu
        size="sm"
        control={
          <Button
            color="dark"
            radius="xl"
            leftIcon={<Avatar />}
            styles={(themes) => ({
              icon: {
                marginRight: '0px !important',
              },
              root: {
                padding: '4px',
                ':hover': {
                  backgroundColor: themes.colors.gray[9],
                },
              },
            })}
          >
            <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
              <Text mx={8}>{user?.display_name}</Text>
            </MediaQuery>
          </Button>
        }
      >
        <Menu.Item rightSection={<LogoutIcon size={16} />} onClick={handleLogout}>
          Logout
        </Menu.Item>
      </Menu>
    );

  return (
    <Button
      component="a"
      href={authorizeUrl}
      title="Login with Spotify"
      radius="xl"
      size="md"
      variant="white"
      color="dark"
    >
      LOG IN
    </Button>
  );
};

export default ButtonAuth;
