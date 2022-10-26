import React, { useEffect, useState } from "react";
import PageLayout from "../Template/Layout/PageLayout";
import { useParams } from "react-router-dom";
import { newsData } from "../Atom/newsData";
import JobDetails from "../Organisms/JobDetails";

export const SeeMoreInfo = ({ NewsData }) => {
  const [jobs, setJob] = useState(NewsData);
  const { id } = useParams();
  const getJobInfo = newsData[id - 1];
  // console.log(id);
  const searchJob = () => {
    const filterJob = jobs.filter((job) => job.id != id);
    return filterJob;
    setJob(searchJob);
  };

  useEffect(() => {
    setJob();
  }, []);

  return (
    <PageLayout>
      <JobDetails {...getJobInfo} />
    </PageLayout>
  );
};
