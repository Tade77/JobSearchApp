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
    <section className=" w-[1257px] h-[449px] border bg-red-500 mx-auto flex flex-col justify-between">
      <div className="">
        <p>{jobTitle}</p>
        <p>{location}</p>
        <p>{position}</p>
        <div>
          <p>{name}</p>
          <p>{specialization}</p>
          <p>{address}</p>
        </div>
      </div>
    </section>
  );
};

export default NewsCard;
