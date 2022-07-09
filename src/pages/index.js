import * as React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../style/custom.css";

import CoverPage from "../components/CoverPage";
import KeyFeatures from "./../components/KeyFeatures";
import WillLearn from "../components/WillLearn";
import MeetInstructors from "../components/MeetInstructors";
import Syllabus from "../components/Syllabus";
import TechnologyYouLearn from "../components/TechnologyYouLearn";
import ProjectsYouBuild from "../components/ProjectsYouBuild";
import FixedCallToAction from "../components/FixedCallToAction";

// styles

// data

// markup

const IndexPage = () => {
  return (
    <main>
      {/*  Cover Page */}
      <CoverPage />
      {/* key features */}
      <KeyFeatures />
      {/* 2. What will you learn */}
      <WillLearn />
      {/* 4. Meet your instructor */}
      <MeetInstructors />
      {/* Syllabus */}
      <Syllabus />
      {/* Technology master hands-on */}
      <TechnologyYouLearn />
      {/* Projects You build */}
      <ProjectsYouBuild />
      {/* fixed CTA only visible on xs and sm mobile screen */}
      <FixedCallToAction />
    </main>
  );
};

export default IndexPage;
// rgb(235, 241, 255)
