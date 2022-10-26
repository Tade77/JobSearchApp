import React from "react";
import Button from "../../Atom/Button/Button";
import { contactData } from "../../Atom/ContactData";
import Inputs from "../../Atom/Inputs/Inputs";
import ContactInfo from "../../Molecules/contacts/contact/ContactInfo";
import "./FormCard.scss";

const FormCard = () => {
  return (
    <div className="contact--info">
      <p className=" header--text">FEEL FREE TO DROP MESSAGE FOR US</p>
      <div className="flex flex-row">
        <form className="contact--form">
          <Inputs name="Name" inputStyle="formStyle" />
          <Inputs name="Email" inputStyle="formStyle" />
          <Inputs name="Subject" inputStyle="formStyle" />
          <Inputs name="Input Text" inputStyle="textArea" />
        </form>
        <div className="flex flex-col">
          <aside>
            {contactData.map((data) => (
              <ContactInfo key={data.id} {...data} />
            ))}
          </aside>
          <div>
            <Button
              label={`Send`}
              customClasses="w-[307px] h-[60px] mt-[46.4px] ml-[51.54px] font-normal text-[22px] rounded-[3.8px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCard;
