import React from "react";
import { Link } from "react-router-dom";

const CardHeader = ({
  jobTitle,
  location,
  position,
  standPoint,
  remuneration,
  duration,
  name,
  specialization,
  address,
}) => {
  return (
    <div>
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
          <Link to="/JobDetails">
            <p className="name">{name}</p>
          </Link>
          <p className="spec">{specialization}</p>
          <p className="address">{address}</p>
        </aside>
      </div>
    </div>
  );
};

export default CardHeader;
