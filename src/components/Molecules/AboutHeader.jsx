import React from "react";
import Text from "../Atom/AllText/Text";
const AboutHeader = () => {
  const about = `
   The most elegant expression of apple 
   watch return with two iconic materials
  -Titaninc and ceramics, The most elegant 
   expression of apple watch return with two
   iconic materials
  -Titanic and ceramics`;
  return (
    <div className="flex flex-row justify-around container mx-auto ">
      <div className="flex ml-[158px]">
        <img
          className="w-[184.43px] h-[114.91px] mt-[166.97px]"
          src="/imglens.png"
          alt=""
        />
        <div className="mr-[45.18px]">
          <img
            className="w-[274px] h-[138px] mt-[157px]"
            src="/myJobs.png"
            alt=""
          />
          <img className="w-[187px] h-[49px]" src="/about.png" alt="" />
        </div>
      </div>
      <div className="w-[466px] h-[307px] bg-[#00717D] mt-[102px] mr-[235px] ">
        <div className="text-white px-[22px] mt-[22px] text-[24px] font-bold">
          <Text sentences="What we do" />
        </div>
        <aside className="py-[23px] leading-[32px] text-[20px] text-white px-[34px]">
          <Text sentences={about} />
        </aside>
      </div>
    </div>
  );
};

export default AboutHeader;
