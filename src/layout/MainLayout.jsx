import React, { useContext } from "react";
import { ThemeContext } from "../App";

import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import "./mainLayout.scss";

export const MainLayout = ({ children }) => {
  
  const theme = useContext(ThemeContext)

  return (
    <div className={`layout layout--${theme.theme}`}>
      <Header>
        <Navigation />
      </Header>
      <Main>{children}</Main>
      <Footer/>
    </div>
  )
}

export default MainLayout;
