import React from "react";

import "../styles/header.scss";

const Header = (props) => {
  return (
    <header className="header">
      <button className="menuButton" onClick={props.click}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};
export default Header;
