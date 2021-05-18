import React from "react";
import logo from "../logo.svg";

function Header() {
  return (
    <div className="App">
      <header className="flex-container">
        <section id="portfolio-name" className="flex-wrap">
          <h1>William Lucht</h1>
        </section>
        <section id="navigation" className="flex-wrap">
          <nav>
            <ul className="flex-container nav-flex-container">
              <li>
                <a href="#about-me-inner">About Me</a>
              </li>
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a href="#connect-with">Contact Me</a>
              </li>
              <li>
                <a href="./assets/pdf/williamlucht-resume.pdf" target="_blank">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </header>
    </div>
  );
}

export default Header;
