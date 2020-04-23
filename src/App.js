import React from "react";
// import logo from "./logo.svg";

import "./App.css";
import Dashboard from "./common/Dashboard";
import NavComponent from "./common/NavComponent";
import FooterComponent from "./common/FooterComponent";

function App() {
  return (
    <>
      <header>
        <NavComponent />
      </header>
      <main>
        <Dashboard />
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </>
  );
}

export default App;
