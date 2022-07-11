import React from "react";

const syllabi = [
  {
    title: "Programming Fundamentals",
    bulletPoint: [
      "Basic Syntax",
      "Data Types",
      "Variables",
      "Conditions",
      "Loops",
      "Functions",
    ],
  },
  {
    title: "Web Developer Essentials",
    bulletPoint: [
      "How Browser Works",
      "HTTP/HTTPS",
      "DNS and Its Working",
      "Git and Deployment",
    ],
  },
  {
    title: "Frontend Development Part I",
    bulletPoint: [
      "Semantic HTML",
      "Forms and Validation",
      "Display and Box Model",
      "CSS Flex Box",
      "Positioning and Floats",
      "Responsive Design",
      "CSS Media Queries",
      "DOM Manipulation",
      "Fetch API",
      "Event Delegation",
      "DOM traversal",
      "ES6+ and modular JavaScript",
    ],
  },
  {
    title: "Frontend Development Part II",
    bulletPoint: [
      "JSX",
      "Components",
      "Props vs State",
      "Conditional Rendering",
      "Functional and Class Components",
      "Component Life Cycle",
      "List and Keys",
      "Composition and Inheritance",
      "React Hooks",
      "Higher Order Component",
      "Error Boundaries",
      "React Forms",
      "React Router and API Calls",
    ],
  },
  {
    title: "Backend Development",
    bulletPoint: [
      "Node.js",
      "OS Concepts",
      "Linux Command",
      "Network, Security and Protocols",
      "Proxy,Caching and Load Balancer",
      "Web Server",
      "CI/CD Tools",
      "Container and Infrastructure",
      "Design Pattern",
    ],
  },
];
export default function Syllabus() {
  return (
    <div className="container-fluid py-5">
      <div className="container py-4 px-2 section--container">
        <div className="row justify-content-center">
          <div className="col-10 col-lg-8 col-xl-7">
            <h2 className="display-3 mb-4 pb-3 fw-bold text-center heading--light">
              Course Syllabus
            </h2>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {syllabi.map((syllab) => (
            <div key={syllab.title} className="col-12 col-md-10 col-lg-6">
              <div
                className="card p-4 pb-3 h-100 shadow-sm border-0 card--custom border--radius-40"
                style={{ backgroundColor: "var(--dark-fg-color)" }}
              >
                <div className="card-body p-1">
                  <h5
                    className="fs-4 mt-1 mb-2 heading--light"
                    style={{ fontWeight: "500" }}
                  >
                    {syllab.title}
                  </h5>
                  <ul style={{ paddingLeft: "1.55rem" }}>
                    {syllab.bulletPoint.map((point) => (
                      <li key={point} className="fs-6 text--light" style={{listStyleType:"disc"}}>
                     {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
