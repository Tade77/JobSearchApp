import React from "react";
import "./Contact.scss";

const ContactMessage = () => {
  const contactMsg = ` We love catching up with our 
  supporters and want to make 
  speaking to us as easy as possible.`;
  return (
    <div>
      <div className="contacts">
        <img src="/contact.png" alt="" />
        <p className="contacts_msg">{contactMsg}</p>
      </div>
    </div>
  );
};

export default ContactMessage;
