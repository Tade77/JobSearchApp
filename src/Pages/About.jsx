import React from "react";
import AboutHeader from "../components/Molecules/AboutHeader";
import AboutPage from "../components/Organisms/AboutPage";
import PageLayout from "../components/Template/Layout/PageLayout";
import { about_Text } from "../components/Atom/AboutText";

const About = () => {
  return (
    <PageLayout>
      <AboutHeader />
      {about_Text.map((text) => (
        <AboutPage key={text.id} {...text} />
      ))}
    </PageLayout>
  );
};

export default About;
