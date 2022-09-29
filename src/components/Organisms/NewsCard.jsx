import React from "react";
import { newsData } from "../Atom/newsData";
const NewsCard = ({
  id,
  jobTitle,
  location,
  position,
  standPoint,
  remuneration,
  duration,
  name,
  specialization,
  address,
  logo,
  summary,
  description,
  qualification,
  level,
  experience,
}) => {
  return (
    <section>
      <div>
        <h1 className="text-black">{jobTitle}</h1>
        <p>{location}</p>
        <p>{position}</p>
      </div>
    </section>
  );
};

export default NewsCard;
