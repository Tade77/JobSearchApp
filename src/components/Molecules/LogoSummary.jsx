import React from "react";
import ShareBtn from "./ShareBtn";
import Button from "../Atom/Button/Button";

const LogoSummary = ({
  id,
  logo,
  summary,
  description,
  qualification,
  level,
  experience,
}) => {
  return (
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
          <div>
            <ShareBtn
              id={id}
              button={
                <Button
                  label="See More"
                  customClasses="w-[263.64px] h-[60px]"
                  ShareBtn={"/public/Icon.png"}
                />
              }
            />
          </div>
        </div>
      </article>
    </div>
  );
};

export default LogoSummary;
