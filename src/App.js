import Navbar from "./components/Navbar.jsx";
import Carousel from "./components/Carousel.jsx";
import About from "./components/About.jsx";
import Enquiry from "./components/Enquiry.jsx";
import Footers from "./components/footers.jsx";
import Home from "./components/Home.jsx";
import AboutPage from "./components/AboutPage.jsx";
import CareerPage from "./components/CareerPage.jsx";
import ContactPage from "./components/ContactPage.jsx";
import { Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <div>
      <div className="App">
        <div>
          <Navbar />
          <div className="overflow-x-hidden">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/about" element={<AboutPage />}></Route>
              <Route exact path="/career" element={<CareerPage />}></Route>
              <Route exact path="/contact" element={<ContactPage />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
