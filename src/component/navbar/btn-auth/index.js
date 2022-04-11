import { useDispatch, useSelector } from 'react-redux';
import { clearAccessToken } from '../../../redux/slices/globalSlice';
import Avatar from '../../avatar';
import styles from './btn-auth.module.scss';

const ButtonAuth = ({ authorizeUrl }) => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.global.accessToken);

  // Clear access token on logout
  const handleLogout = () => {
    dispatch(clearAccessToken());
  };

  if (accessToken)
    return (
      <button className={`btn ${styles.btn__logout}`} onClick={handleLogout}>
        <Avatar />
        Log out
      </button>
    );

  return (
    <a
      href={authorizeUrl}
      className={`btn ${styles.btn__login}`}
      title="Login with Spotify"
      rel="noreferrer"
    >
      Log in
    </a>
  );
};

export default ButtonAuth;
