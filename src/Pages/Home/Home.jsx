import React from "react";
import CompanyCard from "../../components/Molecules/Card/CompanyCard";
import Description from "../../components/Molecules/SearchJobs/Desc/Description";
import PageLayout from "../../components/Template/Layout/PageLayout";
import { companyInfos } from "../../components/Atom/Info";
import Button from "../../components/Atom/Button/Button";

const Home = () => {
  return (
    <PageLayout>
      <Description />
      {companyInfos.map((info) => (
        <CompanyCard key={info.id} {...info} />
      ))}
      <Button label="More Update" outline="outline" />
    </PageLayout>
  );
};

export default Home;
