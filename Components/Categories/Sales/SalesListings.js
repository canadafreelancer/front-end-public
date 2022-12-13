import React from "react";
import SingleSale from "./SingleSale";

function SalesListing({ allSalesCat }) {
  return (
    <>
      <SingleSale allSalesCat={allSalesCat} />
    </>
  );
}

export default SalesListing;
