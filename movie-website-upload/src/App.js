import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieArray: [],
    };
  }
  componentDidMount() {
    fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war")
      .then((res) => res.json())
      .then((json) => this.setState({ movieArray: json.Search }))
      .catch((err) => console.log(err));
  }

  render() {
    const { movieArray } = this.state;
    return (
      <>
        <div className="App">
          <h1>MOVIE WEBSITE PROJECT EDYODA</h1>
          <input id="searchKey"  placeholder="Search Movie Here" />
        </div>
        <div className="movie-card-wrapper">
          {movieArray.map((movie) => {
            return (
              <div className="movie-container" key="pos">
                <img className="movie-poster" src={movie.Poster}></img>
                <h4 className="movie-title" >{movie.Title}</h4>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default App;
