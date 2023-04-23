import React, { useState } from "react";
import JobPostCard from "./job-post-card";
import JobPostMoreInfoCard from "./Job-more-info";

function FindJob() {
  const [isCardOpen, setCardOpen] = useState(false);

  const handleCardClick = () => {
    setCardOpen(!isCardOpen);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1, padding: "1rem" }}>
        <div
          style={{
            background: "lightblue",
            padding: "1rem",
            cursor: "pointer",
          }}
          onClick={handleCardClick}
        >
          <JobPostCard />
        </div>
      </div>
      {isCardOpen && (
        <div style={{ flex: 1, padding: "1rem" }}>
          <div style={{ background: "lightgreen", padding: "1rem" }}>
            <JobPostMoreInfoCard />
          </div>
        </div>
      )}
    </div>
  );
}

export default FindJob;
