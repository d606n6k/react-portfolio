import React from "react";

function Projects(props) {
  return (
    <div className="col-xl-12">
      {props.repo.map((projName) => (
        <div id="work-example-1" className="col-xl-12">
          <a
            href="https://github.com/d606n6k/weather-dashboard"
            target="_blank"
            rel="noreferrer"
          >
            {/* <div id="work-example-1" className="col-xl-12 boxx">
              <div id="project-examp-one">{projName.name}</div>
            </div> */}
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
