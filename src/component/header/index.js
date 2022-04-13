import {
  Box,
  Burger,
  Group,
  Header as BaseHeader,
  MediaQuery,
  useMantineTheme,
} from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setNavbarOpen } from '../../redux/slices/globalSlice';
import { spotifyAuthorizeURL } from '../../service/authorize';
import Logo from '../logo';
import SearchBar from '../searchBar';
import ButtonAuth from './btn-auth';

const Header = () => {
  const theme = useMantineTheme();
  const dispatch = useDispatch();
  const { isNavbarOpen, accessToken } = useSelector((state) => state.global);

  const { location, push } = useHistory();

  // Get query search
  const params = new URLSearchParams(location.search);
  const searchQuery = params.get('q');

  const [search, setSearch] = useState(searchQuery);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  // Delay input for 300ms
  const [debouncedSearch] = useDebouncedValue(search, 300);

  useEffect(() => {
    if (debouncedSearch) {
      push({
        pathname: location.pathname,
        search: `?q=${debouncedSearch}`,
      });
    }
  }, [debouncedSearch, location.pathname, push]);

  return (
    <BaseHeader height={70}>
      <Group sx={{ height: '100%' }} px={20} position="apart" noWrap>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={isNavbarOpen}
            onClick={() => dispatch(setNavbarOpen(!isNavbarOpen))}
            size="sm"
            color={theme.colors.gray[6]}
          />
        </MediaQuery>

        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Box style={{ maxWidth: 130 }}>
            <Logo />
          </Box>
        </MediaQuery>

        {accessToken && (
          <SearchBar
            placeholder="Artists, songs, or podcasts"
            onChange={handleInputChange}
            defaultValue={searchQuery}
          />
        )}

        <ButtonAuth authorizeUrl={spotifyAuthorizeURL()} />
      </Group>
    </BaseHeader>
  );
};

export default Header;
