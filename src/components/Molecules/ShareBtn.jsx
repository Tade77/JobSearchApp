import React from "react";
import { Link } from "react-router-dom";
import Button from "../Atom/Button/Button";

const ShareBtn = ({ id, button, ShareBtn }) => {
  return (
    <aside className=" mr-[40px] flex space-x-[60px]">
      <img className="w-8 h-8 mt-4" src={ShareBtn} alt="" />
      <Link to={`/job/${id}`}>
        {button}
        {/* <Button label="See More" customClasses="w-[263.64px] h-[60px]" /> */}
      </Link>
    </aside>
  );
};

export default ShareBtn;
