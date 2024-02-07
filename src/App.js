import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Testimonial from "./components/Testimonials/Testimonial";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import {Helmet} from "react-helmet/es/Helmet";
const Home = () => {
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    
        <div
          className="App"
          style={{
            background: darkMode ? "black" : "",
            color: darkMode ? "white" : "",
          }}
        >
             <Helmet>
                <title>Gulfam saifi</title>
                <link rel="icon" href={"https://gulfaam.com"}/>
                <meta name="gulfam saifi" content={"gulfam saifi, gulfaam"}/>
                <meta name="gulfam saifi, gulfaam" content={"gulfamsaifi"}/>
                <meta property="og:gulfam saifi, gulfaam" content={"og:gulfam saifi, gulfaam"}/>
                <meta property="og:gulfam saifi, gulfaam" content={"og:gulfam saifi, gulfaam"}/>
             </Helmet>

          <Navbar />
          <Intro />
          <Services />
          <Experience />
          <Works />
          <Portfolio />
          <Testimonial />
          <Contact />
          <Footer />
        </div>
  );
};

export default Home;
