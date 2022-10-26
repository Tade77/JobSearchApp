import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { newsData } from "./components/Atom/newsData";
import { SeeMoreInfo } from "./components/Molecules/SeeMoreInfo";
import JobDetails from "./components/Organisms/JobDetails";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
//Navbar
import Home from "./Pages/Home/Home";
import News from "./Pages/News";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="News" element={<News />} />
        <Route path="About" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="job/:id" element={<SeeMoreInfo NewsData={newsData} />} />
      </Routes>
    </div>
  );
}

export default App;
