import React, { useContext } from "react";
import "./Works.css";
import Reactimage from "../../img/react.png";
import Redux from "../../img/redux.png";
import Cssimage from "../../img/css.png";
import Nextjs from "../../img/nextjs.png";
import Telwind from "../../img/tailwind.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works on All these
          </span>
          <span>Technology</span>
          <spane>
          We use different type of technology
            <br />
            like ReactJs,   MongoDb, Html, CSS, JavaScript, ReduxToolkit, NextJs, SASS.
            <br />
            and we also provides Software development services such as help plan, design, develop, modification, 
            <br />
            maintenance,integrate, test, manage and evolve software solutions. thnx from Gulfam saifi, Gulfaaam
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Reactimage} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Redux} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Cssimage} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Nextjs} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Telwind} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
