import React from "react";
import Footer from "../../Molecules/Footer/Footer";
import NavBar from "../../Molecules/NavBar/Index";

const PageLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
