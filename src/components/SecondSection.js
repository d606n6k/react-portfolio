import React, { Component } from "react";
import API from "../utils/api";
import Project from "./Projects";

class SecondSection extends Component {
  //this is where you would call API and create state
  state = {
    projects: [],
  };

  componentDidMount() {
    this.projectGrab();
  }

  projectGrab = () => {
    API.fetchRepos()
      // .then((res) => console.log(res))
      .then((res) => this.setState({ projects: res.data }))
      .catch((err) => console.log(err));
    // this.setState({ projects: API });
  };

  render() {
    console.log(this.state);
    return (
      <section id="work" className="container-fluid">
        <div className="row">
          <div id="work-h2" className="heading col-12">
            <h2>Work Samples</h2>
          </div>
        </div>
        <div className="container-md work-stuff">
          <div className="content row work-examples">
            <Project repo={this.state.projects} />
            <div className="col-sm">
              <a
                href="https://github.com/d606n6k/recipe-shuffle"
                target="_blank"
                rel="noreferrer"
              >
                <div id="work-example-2" className="col-sm boxx">
                  <div id="project-examp-two"></div>
                </div>
              </a>
            </div>
            <div className="col-sm">
              <a
                href="https://github.com/d606n6k/work-day-scheduler"
                target="_blank"
                rel="noreferrer"
              >
                <div id="work-example-3" className="col-sm boxx">
                  <div id="project-examp-three"></div>
                </div>
              </a>
            </div>
          </div>
          <div className="content row work-examples">
            <div className="col-sm">
              <a
                href="https://github.com/d606n6k/neighborhood_ranking_app"
                target="_blank"
                rel="noreferrer"
              >
                <div id="work-example-4" className="col-sm boxx">
                  <div id="project-examp-four"></div>
                </div>
              </a>
            </div>
            <div className="col-sm">
              <a
                href="https://github.com/d606n6k/ecommerce_backend"
                target="_blank"
                rel="noreferrer"
              >
                <div id="work-example-5" className="col-sm boxx">
                  <div id="project-examp-five"></div>
                </div>
              </a>
            </div>
          </div>

          <div className="project-info">
            <h4>The Weather Dashboard</h4>
            <p>
              Live URL:{" "}
              <a
                href="https://d606n6k.github.io/weather-dashboard/"
                target="_blank"
                rel="noreferrer"
              >
                https://d606n6k.github.io/weather-dashboard/
              </a>
            </p>
            <p>
              Github Repository:{" "}
              <a
                href="https://github.com/d606n6k/weather-dashboard"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/d606n6k/weather-dashboard
              </a>
            </p>
            <p>Tech Used:</p>
            <i className="fa fa-html5 fa-2x"></i>
            <i className="fa fa-css3 fa-2x"></i>
            <i className="fa fa-js fa-2x"></i>
          </div>
          <div className="project-info">
            <h4>recipeShuffle.io</h4>
            <p>
              Live URL:{" "}
              <a
                href="https://d606n6k.github.io/recipe-shuffle/"
                target="_blank"
                rel="noreferrer"
              >
                https://d606n6k.github.io/recipe-shuffle/
              </a>
            </p>
            <p>
              Github Repository:{" "}
              <a
                href="https://github.com/d606n6k/recipe-shuffle"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/d606n6k/recipe-shuffle
              </a>
            </p>
            <p>Tech Used:</p>
            <i className="fa fa-html5 fa-2x"></i>
            <i className="fa fa-css3 fa-2x"></i>
            <i className="fa fa-js fa-2x"></i>
          </div>
          <div className="project-info">
            <h4>The Workday Scheduler</h4>
            <p>
              Live URL:{" "}
              <a
                href="https://d606n6k.github.io/work-day-scheduler/"
                target="_blank"
                rel="noreferrer"
              >
                https://d606n6k.github.io/work-day-scheduler/
              </a>
            </p>
            <p>
              Github Repository:{" "}
              <a
                href="https://github.com/d606n6k/work-day-scheduler"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/d606n6k/work-day-scheduler
              </a>
            </p>
            <p>Tech Used:</p>
            <i className="fa fa-html5 fa-2x"></i>
            <i className="fa fa-css3 fa-2x"></i>
            <i className="fa fa-js fa-2x"></i>
          </div>
          <div className="project-info">
            <h4>The Neighborhood Ranking App</h4>
            <p>
              Live URL:{" "}
              <a
                href="https://neighborhood-appage.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                https://neighborhood-appage.herokuapp.com/
              </a>
            </p>
            <p>
              Github Repository:{" "}
              <a
                href="https://github.com/d606n6k/neighborhood_ranking_app"
                target="_blank"
                rel="noreferrer"
              >
                Repo Link
              </a>
            </p>
            <p>Tech Used:</p>
            <i className="fab fa-html5 fa-2x"></i>
            <i className="icon-spacer fab fa-css3-alt fa-2x"></i>
            <i className="icon-spacer fab fa-js fa-2x"></i>
            <i className="icon-spacer fab fa-node-js fa-2x"></i>
          </div>
          <div className="project-info">
            <h4>The E-commerce Backend CLI App</h4>
            <p>
              Video Demo:{" "}
              <a
                href="https://www.youtube.com/watch?v=iEAfTyJPoEo"
                target="_blank"
                rel="noreferrer"
              >
                Video Link
              </a>
            </p>
            <p>
              Github Repository:{" "}
              <a
                href="https://github.com/d606n6k/ecommerce_backend"
                target="_blank"
                rel="noreferrer"
              >
                Repo Link
              </a>
            </p>
            <p>Tech Used:</p>
            <i className="fab fa-html5 fa-2x"></i>
            <i className="icon-spacer fab fa-css3-alt fa-2x"></i>
            <i className="icon-spacer fab fa-js fa-2x"></i>
            <i className="icon-spacer fab fa-node-js fa-2x"></i>
          </div>
        </div>
      </section>
    );
  }
}

export default SecondSection;
