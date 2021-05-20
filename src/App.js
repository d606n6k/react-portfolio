// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Container from "./components/Container";

function App() {
  return (
    <>
      <Helmet>
        <title>William Lucht - Portfolio</title>
        <meta
          name="description"
          content="William Lucht's React based Portfolio"
        />
        <meta name="theme-color" content="#008f68" />
        <script
          src="https://kit.fontawesome.com/542b46dc44.js"
          crossorigin="anonymous"
        ></script>
        {/* <link href="path/to/font-awesome/css/font-awesome.min.css"></link> */}
      </Helmet>
      <div>
        <Header />
        <Container />
      </div>
    </>
  );
}

export default App;
