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
                <title>Gulfam saifi || Gulfaam saifi, gscoder</title>
                <link rel="icon" href={"https://gulfaam.com"}/>
                <meta name="gulfam saifi, gulfaam saifi" content={"gulfam saifi, gulfaam saifi"}/>
                <meta name="gulfam saifi, gulfaam" content={"gulfamsaifi"}/>
                <meta property="og:gulfam saifi, gulfaam saifi" content={"og:gulfam saifi, gulfaam saifi"}/>
                <meta property="og:gulfam saifi, gulfaam saifi" content={"og:gulfam saifi, gulfaam saifi"}/>
                <meta name="google-site-verification" content="5t1WKw5RPVEzq9vlsRQXDnx5LDj45JpHZzLeIw2eCuM" />
                <meta property="og:image" content="https://gulfaam.com/0202(1)-Cover.jpg" />
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
