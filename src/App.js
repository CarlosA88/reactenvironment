import "./App.css";
import NavComponent from "./common/NavComponent";
import FooterComponent from "./common/FooterComponent";
import CardList from "./reactgettingstarted/basics/GithubCardsApp/CardList";

import React, { Component } from "react";
import FormComponent from "./reactgettingstarted/basics/GithubCardsApp/FormComponent";

class App extends Component {
  state = {
    profiles: [],
  };

  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  render() {
    return (
      <>
        <header className="header">
          <NavComponent />
        </header>
        <main className="main">
          <aside className="aside">
            <CardList profiles={this.state.profiles} />
          </aside>
          <article className="article">
            <div>
              <div className="header-form">{this.props.title}</div>
              <FormComponent onSubmit={this.addNewProfile} />
            </div>
          </article>
        </main>
        <footer className="footer">
          <FooterComponent />
        </footer>
      </>
    );
  }
}

export default App;
