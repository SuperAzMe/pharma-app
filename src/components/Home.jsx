import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import About from "./About";
import Enquiry from "./Enquiry";
import Footers from "./footers";
import ScrollToTopButton from "./ScrollToTopButton";
const Home = () => {
    return (
      <div>        
        <Carousel />
        <About />
        <Enquiry />
        <Footers />
        <ScrollToTopButton />
      </div>
    );
}
 
export default Home;