import React from "react";
import PageLayout from "../components/Template/Layout/PageLayout";
import Image from "../components/Atom/Image";
import ContactMessage from "../components/Molecules/contacts/contact/ContactMessage";
import ContactLocation from "../components/Molecules/contacts/location/ContactLocation";
import FormCard from "../components/Organisms/formField/Form";

const Contact = () => {
  return (
    <PageLayout>
      <div className="flex flex-row">
        <ContactMessage />
        <ContactLocation />
      </div>
      <FormCard />
    </PageLayout>
  );
};

export default Contact;
