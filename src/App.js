import React, { Component } from "react";
import axios from "axios";
import Character from "./components/Character";
import "./App.css";
import simpLogo from "./assets/simpsons_logo.svg";

class WelcomePage extends Component {
  render() {
    return (
      <div className="welcomePage">
        <img className="simpLogo" alt="The Simpsons Logo" src={simpLogo} />
        <button className="button" onClick={this.props.onStart}>
          !Generate!
        </button>
      </div>
    );
  }
}

class App extends Component {
  state = {
    showWelcomePage: true,
    apiData: null,
    searchQuery: ""
  };

  async componentDidMount() {
    try {
      const apiData = await axios.get(
        "https://thesimpsonsquoteapi.glitch.me/quotes?count=50"
      );

      apiData.data.forEach((element, index) => {
        element.id = index;
      });

      this.setState({ apiData: apiData.data });
    } catch (error) {
      console.log("Error with API data");
      console.log(error);
    }
  }

  handleStart = () => {
    this.setState({ showWelcomePage: false });
  };

  handleReturnHome = () => {
    this.setState({ showWelcomePage: true });
  };

  handleInputChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    const { apiData, searchQuery, showWelcomePage } = this.state;

    if (showWelcomePage) {
      return <WelcomePage onStart={this.handleStart} />;
    }

    if (!apiData) {
      return (
        <div className="loading">
          <img className="simpLogo" alt="The Simpsons Logo" src={simpLogo} />
          <h2>Loading...</h2>
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      );
    }

    let filtered = apiData;

    if (searchQuery) {
      filtered = apiData.filter((character) =>
        character.character.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return (
      <>
        <div className="searchArea">
          <div className="search">
            <input
              className="searchBox"
              onChange={this.handleInputChange}
              value={searchQuery}
              type="text"
              placeholder="Search for a character"
            />
          </div>
        </div>
        <div className="characters">
          {filtered.map((character) => (
            <Character key={character.id} character={character} />
          ))}
        </div>
        <button className="returnButton" onClick={this.handleReturnHome}>
          Go Back
        </button>
      </>
    );
  }
}

export default App;
