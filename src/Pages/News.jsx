import React from "react";
import { newsData } from "../components/Atom/newsData";
import MainNews from "../components/Molecules/MainNews";
import JobDetails from "../components/Organisms/JobDetails";
import NewsCard from "../components/Organisms/NewsCard";
import PageLayout from "../components/Template/Layout/PageLayout";

const News = () => {
  return (
    <PageLayout>
      <MainNews />
      {newsData.map((data) => (
        <NewsCard key={data.id} {...data} />
      ))}
    </PageLayout>
  );
};

export default News;
