import React from "react";
import Bar from "../Components/ProjectPost/Bar";
import PostPage from "../Components/ProjectPost/Postpage";
import FormPlate from "../Components/ProjectPost/FormPlate";
import Footer from "../components/Footer/Footer";
import DropDown from "../Components/ProjectPost/DropDown";


function ProjectPost() {
  return (
    <div>
      <PostPage />
      <Bar />
      <FormPlate />
      <Footer />
      <DropDown />
    </div>
  );
}

export default ProjectPost;
