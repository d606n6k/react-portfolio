import React from "react";

function SecondSection() {
  return (
    <section id="work" className="container-fluid">
      <div className="row">
        <div id="work-h2" className="heading col-12">
          <h2>Work Samples</h2>
        </div>
      </div>
      <div className="container-md work-stuff">
        <div className="content row work-examples">
          <div id="work-example-1" className="col-xl-12 boxx">
            <div id="project-examp-one"></div>
          </div>
          <div id="work-example-2" className="col-sm boxx">
            <div id="project-examp-two"></div>
          </div>
          <div id="work-example-3" className="col-sm boxx">
            <div id="project-examp-three"></div>
          </div>
        </div>
        <div className="content row work-examples">
          <div id="work-example-4" className="col-sm boxx">
            <div id="project-examp-four"></div>
          </div>
          <div id="work-example-5" className="col-sm boxx">
            <div id="project-examp-five"></div>
          </div>
        </div>
        <div className="project-info">
          <h4>The Weather Dashboard</h4>
          <p>
            Live URL:{" "}
            <a
              to="https://d606n6k.github.io/weather-dashboard/"
              target="_blank"
            >
              https://d606n6k.github.io/weather-dashboard/
            </a>
          </p>
          <p>
            Github Repository:{" "}
            <a
              to="https://github.com/d606n6k/weather-dashboard"
              target="_blank"
            >
              https://github.com/d606n6k/weather-dashboard
            </a>
          </p>
          <p>Tech Used:</p>
          <i className="fab fa-html5 fa-2x"></i>
          <i className="fab fa-css3-alt fa-2x"></i>
          <i className="fab fa-js fa-2x"></i>
        </div>
        <div className="project-info">
          <h4>recipeShuffle.io</h4>
          <p>
            Live URL:{" "}
            <a to="https://d606n6k.github.io/recipe-shuffle/" target="_blank">
              https://d606n6k.github.io/recipe-shuffle/
            </a>
          </p>
          <p>
            Github Repository:{" "}
            <a to="https://github.com/d606n6k/recipe-shuffle" target="_blank">
              https://github.com/d606n6k/recipe-shuffle
            </a>
          </p>
          <p>Tech Used:</p>
          <i className="fab fa-html5 fa-2x"></i>
          <i className="fab fa-css3-alt fa-2x"></i>
          <i className="fab fa-js fa-2x"></i>
        </div>
        <div className="project-info">
          <h4>The Workday Scheduler</h4>
          <p>
            Live URL:{" "}
            <a
              to="https://d606n6k.github.io/work-day-scheduler/"
              target="_blank"
            >
              https://d606n6k.github.io/work-day-scheduler/
            </a>
          </p>
          <p>
            Github Repository:{" "}
            <a
              to="https://github.com/d606n6k/work-day-scheduler"
              target="_blank"
            >
              https://github.com/d606n6k/work-day-scheduler
            </a>
          </p>
          <p>Tech Used:</p>
          <i className="fab fa-html5 fa-2x"></i>
          <i className="fab fa-css3-alt fa-2x"></i>
          <i className="fab fa-js fa-2x"></i>
        </div>
        <div className="project-info">
          <h4>The Neighborhood Ranking App</h4>
          <p>
            Live URL:{" "}
            <a to="https://neighborhood-appage.herokuapp.com/" target="_blank">
              https://neighborhood-appage.herokuapp.com/
            </a>
          </p>
          <p>
            Github Repository:{" "}
            <a
              to="https://github.com/d606n6k/neighborhood_ranking_app"
              target="_blank"
            >
              Repo Link
            </a>
          </p>
          <p>Tech Used:</p>
          <i className="fab fa-html5 fa-2x"></i>
          <i className="fab fa-css3-alt fa-2x"></i>
          <i className="fab fa-js fa-2x"></i>
          <i className="fab fa-node-js fa-2x"></i>
        </div>
        <div className="project-info">
          <h4>The E-commerce Backend CLI App</h4>
          <p>
            Video Demo:{" "}
            <a to="https://www.youtube.com/watch?v=iEAfTyJPoEo" target="_blank">
              Video Link
            </a>
          </p>
          <p>
            Github Repository:{" "}
            <a
              to="https://github.com/d606n6k/ecommerce_backend"
              target="_blank"
            >
              Repo Link
            </a>
          </p>
          <p>Tech Used:</p>
          <i className="fab fa-html5 fa-2x"></i>
          <i className="fab fa-css3-alt fa-2x"></i>
          <i className="fab fa-js fa-2x"></i>
          <i className="fab fa-node-js fa-2x"></i>
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
