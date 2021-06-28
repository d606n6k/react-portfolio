import React from "react";

function Projects(props) {
  return (
    <div className="col-xl-12">
      {props.repo.slice(33).map((projName) => (
        // <div id="work-example-1" className="col-xl-12">
        <a href={projName.html_url} target="_blank" rel="noreferrer">
          <div id="work-example-1" className="col-xl-12 boxx">
            <div id="project-examp-one">
              <h5>Repository Name: {projName.name}</h5>
              <hr />
              <ul>
                <li>
                  Homepage: <a href={projName.homepage}>{projName.homepage}</a>
                </li>
              </ul>
            </div>
          </div>
        </a>
        // </div>
      ))}
    </div>
  );
}

export default Projects;
