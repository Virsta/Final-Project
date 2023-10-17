import React, { useContext } from "react";
import { ThemeContext } from "../../App";

import "./hero.scss";
import Container from "../Container/Container";

const Hero = ({ children }) => {

  const theme = useContext(ThemeContext);

  return (
    <div className={`hero hero--${theme.theme}`}>
      <div className="hero__overlay"></div>
      <Container>
        <div className="hero__content">{children}</div>
      </Container>
    </div>
  );
};

export default Hero;
