import React from "react";
import SingleMusic from "./SingleMusic";

function MusicListing({ allMusicCat }) {
  return (
    <>
      <SingleMusic allMusicCat={allMusicCat} />
    </>
  );
}

export default MusicListing;
