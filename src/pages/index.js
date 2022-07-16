import * as React from "react";
import { Script } from "gatsby";

import "bootstrap/dist/css/bootstrap.min.css";

import "../style/custom.css";

// import "../style/greyish.css";
// import "../style/black-theme.css";

import CoverPage from "../components/CoverPage";
import KeyFeatures from "./../components/KeyFeatures";
import WillLearn from "../components/WillLearn";
import MeetInstructors from "../components/MeetInstructors";
import Syllabus from "../components/Syllabus";
import TechnologyYouLearn from "../components/TechnologyYouLearn";
import ProjectsYouBuild from "../components/ProjectsYouBuild";
import FixedCallToAction from "../components/FixedCallToAction";
import Header from "../components/Header";
import Faq from "./../components/Faq";

// styles

// data

// markup

const IndexPage = () => {
  
  return (
    <main>
      <Header />

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
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
    </main>
  );
};

export default IndexPage;
// rgb(235, 241, 255)
