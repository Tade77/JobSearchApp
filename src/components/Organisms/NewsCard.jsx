import React from "react";
import { newsData } from "../Atom/newsData";
import Button from "../Atom/Button/Button";
import "./NewCard.scss";
import { Link } from "react-router-dom";
import CardHeader from "../Molecules/CardHeader";
import ShareBtn from "../Molecules/ShareBtn";
import LogoSummary from "../Molecules/LogoSummary";
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
    <section className="cardWrapper ">
      <div>
        <CardHeader
          jobTitle={jobTitle}
          location={location}
          position={position}
          standPoint={standPoint}
          remuneration={remuneration}
          duration={duration}
          name={name}
          specialization={specialization}
          address={address}
        />
      </div>
      <hr />
      <div>
        <LogoSummary
          id={id}
          logo={logo}
          summary={summary}
          description={description}
          qualification={qualification}
          level={level}
          experience={experience}
        />
      </div>
    </section>
  );
};

export default NewsCard;
