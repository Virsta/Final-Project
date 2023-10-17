import { Link } from "react-router-dom";
import welcomeImg from "../images/welcome-img.png";
import '../styles/index.scss';

const WelcomePage = () => {
  return ( 
    <>
    <div className="welcome-text ">
      <h2 className="uppercase">Wallpaper Wizard</h2>
      <p className="welcome-text__caption">Search the newest wallpapers</p>
      <Link to="/Home" className="start-link">
        START
      </Link>
    </div>    
    <img src={welcomeImg} alt="welcome" className="welcomeImg"/>
    <div className="welcomeImg__overlay"></div>
    
    </>
   );
}
 
export default WelcomePage;