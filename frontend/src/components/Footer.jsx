import { NavLink } from "react-router-dom";
import "../style/Footer.css";
import Logo from "../assets/pictures/logo-HD-white-transparent back-titre.png";
import Facebook from "../assets/pictures/facebook.png";
import Instagram from "../assets/pictures/instagram.png";
import Twitter from "../assets/pictures/twitter.png";
import Youtube from "../assets/pictures/youtube.png";
import Github from "../assets/pictures/github.png";
import Linkedin from "../assets/pictures/linkedin.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="divLogoFooter">
        <NavLink className="linkFooter" to="/">
          <img className="logoFooter" src={Logo} alt="logo aspiraction" />
        </NavLink>
      </div>
      <div>
        <ul className="linksFooter">
          <NavLink className="linkFooter" to="/contact">
            <li className="linkIntern">Foire aux questions</li>
          </NavLink>
          <NavLink className="linkFooter" to="/">
            <li className="linkIntern">Mentions légales</li>
          </NavLink>
        </ul>
      </div>
      <div className="listeRSfooter">
        <div>Retrouvez nous sur les réseaux sociaux !</div>
        <div className="listeRes">
          <ul className="listIconesRS">
            <li className="liIcone">
              <a
                href="https://www.facebook.com/wildcodeschool"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="logo-width"
                  src={Facebook}
                  alt="logo facebook"
                />
              </a>
            </li>
            <li className="liIcone">
              <a
                href="https://twitter.com/wildcodeschool"
                target="_blank"
                rel="noreferrer"
              >
                <img className="logo-width" src={Twitter} alt="logo twitter" />
              </a>
            </li>
            <li className="liIcone">
              <a
                href="https://www.linkedin.com/school/10387519"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="logo-width"
                  src={Linkedin}
                  alt="logo linkedin"
                />
              </a>
            </li>
            <li className="liIcone">
              <a
                href="https://www.youtube.com/channel/UCi99G_0QPx5sYsK8zdvQzfw"
                target="_blank"
                rel="noreferrer"
              >
                <img className="logo-width" src={Youtube} alt="logo youtube" />
              </a>
            </li>
            <li className="liIcone">
              <a
                href="https://github.com/WildCodeSchool"
                target="_blank"
                rel="noreferrer"
              >
                <img className="logo-width" src={Github} alt="logo github" />
              </a>
            </li>
            <li className="liIcone">
              <a
                href="https://www.instagram.com/wildcodeschoolofficial/?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="logo-width"
                  src={Instagram}
                  alt="logo instagram"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
