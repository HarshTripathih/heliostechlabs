import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Carouseldiv from "../Components/Crowsel/Carausel";
import CaseStudiesContainer from "../Components/CaseStudes/CaseStudiesContainer";
import Footerpage from "../Components/Footer/Footer";
import FooterCallAction from "../Components/Footer/footerCallAction";

const CaseStudies = () => {
  return (
    <div>
      <Navbar />
      <Carouseldiv />
      <CaseStudiesContainer />
      <FooterCallAction />
      <Footerpage />
    </div>
  );
};

export default CaseStudies;
