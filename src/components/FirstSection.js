import React from "react";

function FirstSection() {
  return (
    <section id="flex-container container about-me">
      <div className="row">
        <section id="about-me-inner" className="col-sm">
          <div id="intro">
            <h2 className="flex-wrap">Get to know William...</h2>
            <p className="flex-wrap first-p">
              A strong work ethic is the basis for all success. With over 5
              years Web Development experience primarily focused on E-Commerce
              Implementations, I put forward my drive and passion for the Web
              with thorough and sound solutions. I have been on development
              teams solving business solution for small brick and mortar stores
              to enterprise level Salesforce implementations for multi million
              dollar companies.
            </p>
            <p>
              My vast understanding of the E-Commerce ecosystem has garnered
              positive reviews and acknowledgement from those I work for. Please
              feel free to contact me about any current Web
              Development/E-commerce opportunities I may be qualified for. Thank
              you.{" "}
            </p>
          </div>
          <div id="connect-with">
            <h2>Connect with me!</h2>
            <p>
              Phone: <a href="tel:+18586034860">+1 (858)603-4860</a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:aaronlucht@gmail.com">aaronlucht@gmail.com</a>
            </p>
            <p>
              via{" "}
              <a
                href="https://github.com/d606n6k"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-github"></i> - Github
              </a>
            </p>
            <p>
              via{" "}
              <a
                href="https://www.linkedin.com/in/williamlucht/"
                target="_blank"
                role="button"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin"></i> - LinkedIn
              </a>
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}

export default FirstSection;
