import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import CompanyCard from "./companycard";
import ComparisonCard from "./comparisoncard";
import { companies, comparisons } from "./data";

const CompanyReviews = () => {
  return (
    <div className="app">
      <div className="section">
        <h1>Company Information</h1>
        <Grid container spacing={6} p={10} pt={2}>
          {companies.map((company, index) => (
            <CompanyCard key={index} company={company} />
          ))}
        </Grid>
      </div>
      <div className="section">
        <h1>Compare Companies</h1>
        <Grid container spacing={6} p={10} pt={2}>
          {comparisons.map((comparison, index) => (
            <ComparisonCard key={index} comparison={comparison} />
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default CompanyReviews;
