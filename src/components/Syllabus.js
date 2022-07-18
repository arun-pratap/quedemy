import React from "react";

const syllabi = [
  {
    title: "Frontend Basics",
    timeTaken: "3 weeks",
    bulletPoint: [
      "How Websites Work",
      "HTML Introduction",
      "Structure of Webpage",
      "HTML Tags",
      "Texts, Images, Videos",
      "Lists, Forms, Tables",
      "Links, Anchor tags",
      "HTML Blocks and Sections",
      "CSS Introduction",
      "Inline Styling",
      "Internal and External Styling",
      "CSS Display",
      "CSS Font Styling",
      "Background, Margin, and Padding",
      "Styling Lists, Tables, and Forms",
      "Transitionals, Transformations, Animations",
      "Styling Bbutton",
      "Tool tip, Box Sizing",
      "Flex, Grid",
      "Projects",
    ],
  },
  {
    title: "Javascript",
    timeTaken: "4 weeks",
    bulletPoint: [
      "      Introduction to JavaScript",
      "Variables, scoping, Data type",
      "Strings and Numbers",
      "Operators and loops",
      "Functions",
      "Arrays and Objects",
      "Data Structures - Stack, Queues, Maps, Sets",
      "Understanding and working with DOM",
      "Developer tools in Browsers",
      "Prototypes",
      "Closures",
      "Browser Local Storage",
      "Jquery, Ajax",
      "Promises",
      "ES5 vs ES6 vs ES7",
      "Eventloop in Javascript",
    ],
  },
  {
    title: "ReactJS",
    timeTaken: "3 weeks",
    bulletPoint: [
      " React Intro",
      "Node Installation",
      "Create an App using create-react-app",
      "Basics of React App",
      "Understanding JSX",
      "Understanding Virtual DOMS , SPA",
      "React Lifecycle",
      "States",
      "Class Components vs functional components",
      "Event handling, props",
      "Forms in React",
      "Routes",
      "Conditional Rendering",
      "Pure Components",
      "High order components",
      "Controlled vs Uncontrolled components",
      "React Hooks",
      "Redux",
      "Babel, Webpack",
      "Axios, Creating a mock server",
      "SASS overview",
    ],
  },
  {
    title: "NodeJS",
    timeTaken: "2 weeks",
    bulletPoint: [
      "     Creating a Simple Server",
      "Response types - HTML, JSON",
      "Routing",
      "Express Introduction",
      "Intergrate Frontend and Backend",
      "Express Params and Query String",
      "Express Middleware",
      "API Authentication",
      "JWT Token, Passport.js",
      "Socket Programming",
    ],
  },
  {
    title: "Database",
    timeTaken: "2 weeks",
    bulletPoint: [
      "SQL vs NOSQL",
      "MongoDB overview",
      "Installing MongoDB",
      "Connecting and Inserting Data",
      "Deleting and updating Data",
      "Understanding CRUD operations",
    ],
  },
  {
    title: "Git and Deployment",
    timeTaken: "2 weeks",
    bulletPoint: [
      "Tools for Code review",
      "Understand Review Board",
      "Understanding Firebase",
      "Github",
      "Deploy using Netlify and Github",
      "Deploy all the projects",
    ],
  },
];
export default function Syllabus() {
  return (
    <div className="container-fluid py-5 bg--dark">
      <div className="container pb-4 px-0 section--container">
        <div className="row justify-content-center">
          <div className="col-10 col-lg-8 col-xl-7">
            <h2 className="display-3 mb-4 pb-3 fw-bold text-center heading--light">
              Course Syllabus
            </h2>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {syllabi.map((syllab) => (
            <div key={syllab.title} className="col-12 col-lg-6">
              <div
                className="card pt-3  border--radius-80"
                style={{ backgroundColor: "var(--highlight-color-2)" }}
              >
                <div
                  className="card p-4 pb-3 h-100 shadow-sm card--custom border--radius-80"
                  style={{ backgroundColor: "var(--dark-bg-color)" }}
                >
                  <div className="card-body py-4 px-2">
                    <div className="d-inline-flex align-items-center">
                      <h5
                        className="fs-4 mt-1 mb-2 me-3 heading--light"
                        style={{ fontWeight: "500" }}
                      >
                        {syllab.title}
                      </h5>
                      <div>
                        <small
                          className="badge heading--light"
                          style={{
                            backgroundColor: "var(--highlight-color-2)",
                          }}
                        >
                          {syllab.timeTaken}
                        </small>
                      </div>
                    </div>
                    <div className="container-fluid px-0 my-4">
                      <div className="row g-2">
                        {syllab.bulletPoint.map((point) => (
                          <div
                            key={point}
                            className="col-12 col-sm-6 col-md-4 col-lg-6 text-center"
                          >
                            <p
                              key={point}
                              className="px-3 py-3 mb-0 shadow-sm text--light"
                              style={{
                                backgroundColor: "var(--dark-bg-color)",
                                borderRadius: "20px",
                                border: "1px solid hsl(263deg 78% 45% / 50%)",
                              }}
                            >
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
