import React from "react";
import Text from "../../../Atom/AllText/Text";
import "./Location.scss";

const ContactLocation = () => {
  const desc = `Lorem Ipsum Lorem Ipsum Lorem 
  Ipsum Lorem Ipsum `;
  return (
    <div className="location">
      <header className="location--header ">
        <Text sentences={`Where you can find us`} />
      </header>
      <div className="location--desc">
        <img src="/location.png" alt="" />
        <Text sentences={desc} />
      </div>
      <div className="location--contactor">
        <Text sentences=" - Hi. My name is Khoa. I am a " />
      </div>
    </div>
  );
};

export default ContactLocation;
