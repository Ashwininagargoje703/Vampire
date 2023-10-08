import React, { useState } from "react";
import JobPostCard from "./job-post-card";

const FindJob = ({ searchResults, setSearchResults }) => {
  console.log("searchResults", searchResults);
  const [isCardOpen, setCardOpen] = useState(false);

  const handleCardClick = () => {
    setCardOpen(!isCardOpen);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: 1 }}>
        <div
          style={{
            padding: "1rem",
            cursor: "pointer",
          }}
          onClick={handleCardClick}
        >
          <JobPostCard
            searchResults={searchResults}
            setSearchResults={setSearchResults}
          />
        </div>
      </div>
      {/* <div style={{ flex: 1 }}>
        <div style={{ padding: "1rem" }}>
          <JobPostMoreInfoCard />
        </div>
      </div> */}
    </div>
  );
};

export default FindJob;
