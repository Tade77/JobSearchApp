import React from "react";
import CompanyCard from "../../components/Molecules/Card/CompanyCard";
import Description from "../../components/Molecules/SearchJobs/Desc/Description";
import PageLayout from "../../components/Template/Layout/PageLayout";
import { companyInfos } from "../../components/Atom/Info";
import Button from "../../components/Atom/Button/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <PageLayout>
      <Description />
      {companyInfos.map((info) => (
        <CompanyCard key={info.id} {...info} />
      ))}
      <Link to={`News`}>
        <Button label="More Update" outline="outline" />
      </Link>
    </PageLayout>
  );
};

export default Home;
