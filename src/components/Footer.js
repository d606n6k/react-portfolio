import React from "react";

function Footer() {
  return (
    <footer id="contact-me" className="bg-dark text-center text-white">
      <div className="container p-4 pb-0">
        <h6>Let's Connect!</h6>
        <section className="mb-1">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://twitter.com/emericas1"
            target="_blank"
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.linkedin.com/in/williamlucht/"
            target="_blank"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/d606n6k"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>
      <div
        className="text-center p-3"
        style="background-color: rgba(0, 0, 0, 0.2);"
      >
        © 2021 Copyright:
        <a
          className="text-white"
          href="https://github.com/d606n6k"
          target="_blank"
        >
          William Lucht
        </a>
      </div>
    </footer>
  );
}

export default Footer;
