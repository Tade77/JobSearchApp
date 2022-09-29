import React from "react";
import Button from "../../Atom/Button/Button";
import "../../Atom/Info";
import "./CompanyCard.scss";
const CompanyCard = ({
  name,
  image,
  location,
  role,
  title1,
  title2,
  title3,
  description,
  requirement,
  responsibility,
}) => {
  return (
    <div>
      <section className="card">
        <aside className="aside">
          <img src={image} alt="" />
          <h1 className="hStyle">{name}</h1>
          <p
            className="pStyle
          "
          >
            {location}
          </p>
          <Button label="More" customClasses="btnMore" />
        </aside>
        <article className="article">
          <h1 className="roleText">{role}</h1>
          <h1 className="hStyle">{title1}</h1>
          <p className="pStyle">{description}</p>
          <h1 className="hStyle">{title2}</h1>
          <p className="pStyle">{requirement}</p>
          <h1 className="hStyle">{title3}</h1>
          <p className="pStyle">{responsibility}</p>
        </article>
      </section>
      
    </div>
  );
};

export default CompanyCard;
