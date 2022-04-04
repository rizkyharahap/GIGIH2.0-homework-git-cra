import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAccessToken } from "../../../redux/slices/globalSlice";
import Avatar from "../../avatar";
import "./index.css";

const ButtonAuth = ({ authorizeUrl }) => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.global.accessToken);

  // Clear access token on logout
  const handleLogout = () => {
    dispatch(clearAccessToken());
    window.location.replace(process.env.REACT_APP_BASE_URL);
  };

  if (accessToken)
    return (
      <button className="btn btn-auth btn-auth-logout" onClick={handleLogout}>
        <Avatar />
        Log out
      </button>
    );

  return (
    <a
      href={authorizeUrl}
      className="btn btn-auth btn-auth-login"
      title="Login with Spotify"
      rel="noreferrer"
    >
      Log in
    </a>
  );
};

export default ButtonAuth;
