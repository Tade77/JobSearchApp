import React from "react";
import Button from "../../../Atom/Button/Button";
import Inputs from "../../../Atom/Inputs/Inputs";
import "./InputGroup.scss";

const InputGroup = () => {
  return (
    <div className="inputs ">
      <aside className="inputs--select ">
        <Inputs name="company" inputStyle="inputStyle" />
        <select name="filter" className="inputs--selects">
          <option value="management">Management</option>
          <option value="Bio-chemical">Bio-Chemical</option>
          <option value="informatic">Informatic</option>
        </select>
      </aside>
      <Inputs name="search the web" inputStyle="" />
      <aside>
        <p className="desc--text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
          quos rem reiciendis, voluptatem minima similique.
        </p>
        <Button label="Sign Up" customClasses="w-[366px] h-[72px]" />
      </aside>
    </div>
  );
};

export default InputGroup;
