import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import './button.scss'

const Button = ({children, color, type}) => {
  const theme = useContext(ThemeContext);

  return ( 
    <button type={type} className={`button--${theme.theme} button ${color ==='primary' ? 'button--secondary' : ''}`}>
      {children}
    </button>
   );
}
 
export default Button;