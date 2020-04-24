import React from "react";
// import logo from "./logo.svg";

import "./App.css";
import Dashboard from "./reactgettingstarted/basics/Dashboard";
import NavComponent from "./common/NavComponent";
import FooterComponent from "./common/FooterComponent";

function App() {
  return (
    <>
      <header className="header">
        <NavComponent />
      </header>
      <main className="main">
        <aside className="aside">Navigation</aside>
        <article className="article">
          <Dashboard />
        </article>
      </main>
      <footer className="footer">
        <FooterComponent />
      </footer>
    </>
  );
}

export default App;
