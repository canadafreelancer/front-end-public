import React from "react";
import SingleBusiness from "./SingleBusiness";

function BusinessListing({ allBusinessCat }) {
  return (
    <>
      <SingleBusiness allBusinessCat={allBusinessCat} />
    </>
  );
}

export default BusinessListing;
