import { Box } from '@mantine/core';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Spinner from '../component/spinner';
import { setAccessToken } from '../redux/slices/globalSlice';

const AuthCallback = () => {
  const dispatch = useDispatch();

  let { location } = useHistory();

  const params = new URLSearchParams(location.hash.replace('#', '?'));
  const token = params.get('access_token');

  // Set access token to redux
  useEffect(() => {
    if (token) dispatch(setAccessToken(token));
  }, [dispatch, token]);

  return (
    <Box>
      <Spinner />
    </Box>
  );
};

export default AuthCallback;
