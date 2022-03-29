import React from "react";
import Container from "../container";
import SearchBar from "../searchBar";
import ButtonAuth from "./btn-auth";
import "./index.css";

const Navbar = ({ onSearch, authorizeUrl }) => {
  return (
    <header className="navbar-wrapper">
      <Container>
        <nav className="navbar">
          <SearchBar
            placeholder="Artists, songs, or podcasts"
            onSearch={onSearch}
          />

          <ButtonAuth authorizeUrl={authorizeUrl} />
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
