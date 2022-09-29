import React from "react";
import Text from "../../../Atom/AllText/Text";
import JobLogo from "../../../Atom/JobLogo";
import InputGroup from "../InputItem/InputGroup";
import "./Description.scss";
const Description = () => {
  const descriptionText =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quamrecusandae consequatur aperiam, quia eos, laboriosam officiis obcaecatimolestiae magni rem, possimus numquam ut soluta delectus laborum liberoexercitationem cupiditate. Quibusdam totam eveniet necessitatibusobcaecati eligendi laudantium dolorum et repudiandae, harum expeditatempora eaque laborum enim culpa ut, temporibus, illo odit quod atdignissimos ad id quia ipsum beatae.";
  return (
    <div>
      <div className=" top">
        <div className="top--jobs">
          <JobLogo />
        </div>
        <div>
          <InputGroup />
        </div>
      </div>
      <div className="lowerText">
        <Text sentences={descriptionText} />
      </div>
      <h1 className=" ml-[170px] mb-[64px] text-[32px] right-[174px] text-[#424242]">
        RECENTLY POSTED JOBS
      </h1>
    </div>
  );
};

export default Description;
