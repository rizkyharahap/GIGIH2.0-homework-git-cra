import React from "react";
import Avatar from "../../avatar";
import "./index.css";

const ButtonAuth = ({ authorizeUrl }) => {
  // Check has token in localStorage
  const isLogin = localStorage.getItem("spotify-token");

  // Remove localstorage on logout
  const handleLogout = () => {
    localStorage.removeItem("spotify-token");
    window.location.replace(process.env.REACT_APP_BASE_URL);
  };

  if (isLogin)
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
