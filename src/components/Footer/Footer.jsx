import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import {Helmet} from "react-helmet/es/Helmet";
const Footer = () => {
  return (
    <div className="footer">
        <Helmet>
                <title>Gulfam saifi || Gulfaam saifi</title>
                <link rel="icon" href={"https://gulfaam.com"}/>
                <meta name="gulfam saifi, gulfaam saifi" content={"gulfam saifi, gulfaam saifi"}/>
                <meta name="gulfam saifi, gulfaam saifi" content={"gulfamsaifi"}/>
                <meta property="og:gulfam saifi, gulfaam saifi" content={"og:gulfam saifi, gulfaam saifi"}/>
                <meta property="og:gulfam saifi, gulfaam saifi" content={"og:gulfam saifi, gulfaam saifi"}/>
             </Helmet>
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Gulfam.sviim@gmail.com</span>
  
        <div className="f-icons">
        <a href="https://www.instagram.com/gulfaam6319/" target="_blank" rel="noreferrer">
          <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100091512731855" target="_blank" rel="noreferrer">
          <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/GulfamASB" target="_blank" rel="noreferrer">
          <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
