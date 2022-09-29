import React from "react";
import { newsData } from "../components/Atom/newsData";
import MainNews from "../components/Molecules/MainNews";
import NewsCard from "../components/Organisms/NewsCard";
import PageLayout from "../components/Template/Layout/PageLayout";

const News = ({ children }) => {
  return (
    <PageLayout>
      <MainNews />
      {newsData.map((data) => (
        <NewsCard key={data.id} {...data} />
      ))}
      {/* {children} */}
    </PageLayout>
  );
};

export default News;
