import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Container from '../component/container';
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
    <Container>
      <Spinner />
    </Container>
  );
};

export default AuthCallback;
