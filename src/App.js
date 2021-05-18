import logo from "./logo.svg";
import "./App.css";
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
          src="./assets/scripts/script.js"
          type="text/javascript"
        ></script>
      </Helmet>
      <div>
        <Header />
        <Container />
      </div>
    </>
  );
}

export default App;
