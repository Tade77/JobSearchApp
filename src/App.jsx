import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
//Navbar
import Home from "./Pages/Home/Home";
import News from "./Pages/News";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="News" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
