import React from "react";
import { Link } from "react-router-dom";
const JobCard = ({
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
    <section className="cardWrapper ">
      <div className="jobInfo">
        <aside className="job">
          <p className="job_title">{jobTitle}</p>
          <p className="job_location">{location}</p>
          <div className="jobInfo_recInfo">
            <p>{position}</p>
            <p>{standPoint}</p>
            <p>N{remuneration}</p>
            <p>{duration}</p>
          </div>
        </aside>
        <aside>
          <Link to="/MoreJobInfo">
            <p className="name">{name}</p>
          </Link>
          <p className="spec">{specialization}</p>
          <p className="address">{address}</p>
        </aside>
      </div>
      <hr />
      <div className="infoCard">
        <aside>
          <img className="logo" src={logo} alt="logo" />
        </aside>
        <article className="artText">
          <p className="summary">{summary}</p>
          <p className="description">{description}</p>
          <div className="info">
            <aside className="flex flex-row space-x-8">
              <ul className=" list-disc ml-8">
                <li>Mininum qualification</li>
                <li>Experience level</li>
                <li>experience length</li>
              </ul>
              <div className=" text-[#666666] font-normal">
                <p>{qualification}</p>
                <p>{level}</p>
                <p>{experience}</p>
              </div>
            </aside>
          </div>
        </article>
      </div>
    </section>
  );
};

export default JobCard;
