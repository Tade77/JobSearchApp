import React from "react";
import { newsData } from "../Atom/newsData";
import CardHeader from "../Molecules/CardHeader";
import JobHeader from "../Molecules/JobHeader/JobHeader";
import LogoSummary from "../Molecules/LogoSummary";
import NewsCard from "./NewsCard";
const JobDetails = ({
  name,
  address,
  specialization,
  jobTitle,
  location,
  position,
  standPoint,
  remuneration,
  duration,
  logo,
  id,
  summary,
  description,
}) => {
  return (
    <div>
      <JobHeader
        name={name}
        address={address}
        specialization={specialization}
        jobTitle={jobTitle}
      />
      <CardHeader
        jobTitle={jobTitle}
        location={location}
        position={position}
        standPoint={standPoint}
        remuneration={remuneration}
        duration={duration}
        name={name}
        address={address}
        specialization={specialization}
      />
      <LogoSummary
        logo={logo}
        id={id}
        summary={summary}
        description={description}
      />
    </div>
  );
};

export default JobDetails;
