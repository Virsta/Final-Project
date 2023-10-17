import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import Container from "../Container/Container";
import logo from "../../images/icons/logo.jpg";
import dark from "../../images/icons/logo-dark.png";

import "./header.scss";
import "../../styles/index.scss";

const Header = ({ children }) => {
  
  const theme = useContext(ThemeContext);

  const logoSrc = theme.theme === "dark" ? dark : logo;

  return (
    <Container>
      <header className="header">
        <div className="flex-container">
          <img src={logoSrc} alt="Logo" className="logo-img" />
          <p className="text-logo">Wallpaper Wizard</p>
        </div>
        {children}
      </header>
    </Container>
  );
};

export default Header;
