import * as React from "react";

import CoverPage from "../components/CoverPage";
import KeyFeatures from "../components/KeyFeatures";
import WillLearn from "../components/WillLearn";
import MeetInstructors from "../components/MeetInstructors";
import Syllabus from "../components/Syllabus";
import TechnologyYouLearn from "../components/TechnologyYouLearn";
import ProjectsYouBuild from "../components/ProjectsYouBuild";
import FixedCallToAction from "../components/FixedCallToAction";

import Faq from "../components/Faq";

// styles

// data

// markup

const Index = () => {
  return (
    <main>
      {/*  Cover Page */}
      <CoverPage />

      {/* 2. What will you learn */}
      <WillLearn />

      {/* key features */}
      <KeyFeatures />

      {/* Syllabus */}
      <Syllabus />

      {/* 4. Meet your instructor */}
      <MeetInstructors />

      {/* Projects You build */}
      <ProjectsYouBuild />

      {/* Technology master hands-on */}
      <TechnologyYouLearn />

      {/* FAQS */}
      <Faq />

      {/* fixed CTA only visible on xs and sm mobile screen */}
      <FixedCallToAction />
    </main>
  );
};

export default Index;
// rgb(235, 241, 255)
