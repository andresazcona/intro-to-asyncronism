
//las imagenes de los personajes las descargue todas porque la verdad profe no me dejaba cambiarles el tamaño si hacia fetch desde la API

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

/**
 * Componente principal de la aplicación.
 * 
 * @class App
 * @extends Component
 */
class App extends Component {
  state = {
    showWelcomePage: true,
    apiData: null,
    searchQuery: ""
  };
// use axios porque facilita las requests para no matarme la cabeza con request errors
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
  // DEVELOPMENT ABANDONED HERE (la funcion de favoritos me quitaba mas de lo que me daba, y me dio pereza acabarla, btw mo servia para nada)
  onLike = (id) => {
    const index = this.state.apiData.findIndex((item) => item.id === id);

    const apiData = [...this.state.apiData];
    this.setState({ apiData });
  };

  onInput = (searchQuery) => {
    this.setState({ searchQuery });
  };

  handleStart = () => {
    this.setState({ showWelcomePage: false });
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
              onInput={(e) => this.onInput(e.target.value)}
              type="text"
              placeholder="Search for a character"
              ref={(searchBox) => (this.searchBox = searchBox)}
            />
          </div>
        </div>
        <div className="characters">
          {filtered.map((character) => (
            <Character key={character.id} character={character} />
          ))}
        </div>
      </>
    );
  }
}

export default App;
