import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Home } from "./components/home";
import { Services } from "./components/services";
import { Personal } from "./components/personal";
import { Relation } from "./components/relation";
import { Tough } from "./components/tough";
import { Talks } from "./components/talks";
import { Contact } from "./components/contact";
import { About } from "./components/about";
import { Footer } from "./components/footer";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header data={landingPageData.Header} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/services" element={<Services />} /> */}
            <Route path="/personal-and-professional-growth" element={<Personal />} />
            <Route path="/relationship-coaching" element={<Relation />} />
            <Route path="/tough-times" element={<Tough />} />
            <Route path="/talks-and-team-building-workshops" element={<Talks />} />
            <Route path="*" element={<Home />} />
          </Routes>
        <Footer data={landingPageData.Footer} />
      </BrowserRouter>
    </div>
  );
};

export default App;
