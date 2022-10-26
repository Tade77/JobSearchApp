import React from "react";
import { about_Text } from "../Atom/AboutText";
const AboutPage = ({ id, about, image, text }) => {
  return (
    <div className="flex flex-row mr-[255px] my-[158px]">
      <img
        className="w-[81.06px] h-[80px] ml-[50px] mt-8 mr-[23px] "
        src={image}
        alt=""
      />
      <article className="">
        <p className="text-[#00717D] text-[32px] leading-[58px]">{about}</p>
        <p className="w-[1121px] h-[260px] text-[22px] leading-[40px] text-[#454545] ">
          {text}
        </p>
      </article>
    </div>
  );
};

export default AboutPage;

// w-[466px] h-[283px] bg-[#00717D] text-white mr-[117px] mt-[100px] h-[100%] px-10 pb-[38px] pt-[24px
