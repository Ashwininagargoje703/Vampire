// ComparisonCard.js
import React from "react";
import CompanyCard from "./companycard";

const ComparisonCard = ({ comparison }) => {
  const { company1, company2 } = comparison;
  return (
    <>
      <CompanyCard company={company1} />
      <CompanyCard company={company2} />
    </>
  );
};

export default ComparisonCard;
