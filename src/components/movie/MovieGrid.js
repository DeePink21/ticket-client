import React, { Component } from "react";
import MovieService from "../../services/MovieService";
import MovieGridItem from "./MovieGridItem";

export default class MovieGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allMovies: [],
      movies: [],
      searchTitle: this.props.searchTitle,
    };
    console.log(this.props.searchTitle);
    this.getNowShowing = this.getNowShowing.bind(this);
  }

  componentDidMount() {
    MovieService.getNowShowing()
      .then((res) => {
        this.setState({ allMovies: res.data.content });
      })
      .then(() => {
        if (this.props.searchTitle !== "" && this.state.allMovies) {
          let movieData = this.state.allMovies.filter((movie) =>
            movie.name
              .toLowerCase()
              .includes(
                this.removeAccents(this.props.searchTitle.toLowerCase())
              )
          );
          this.setState({ movies: movieData });
        } else this.setState({ movies: this.state.allMovies });
        console.log(this.state.movies);
      });
  }

  getComingSoon() {
    console.log("soon");
    // MovieService.getComingSoon()
    //   .then((res) => {
    //     this.setState({ allMovies: res.data });
    //   })
    //   .then(() => {
    //     if (this.props.searchTitle !== "" && this.state.allMovies) {
    //       let movieData = this.state.allMovies.filter((movie) =>
    //         movie.name.includes(this.removeAccents(this.props.searchTitle))
    //       );
    //       this.setState({ movies: movieData });
    //     } else this.setState({ movies: this.state.allMovies });
    //     console.log(this.state.movies);
    //   });
  }

  getNowShowing() {
    console.log("now");
  }

  componentWillReceiveProps(newProps) {
    if (
      this.props.searchTitle !== newProps.searchTitle &&
      this.props.searchTitle !== ""
    ) {
      let movieData = this.state.allMovies.filter((movie) =>
        movie.name.includes(this.removeAccents(newProps.searchTitle))
      );
      this.setState({ movies: movieData });
    } else this.setState({ movies: this.state.allMovies });
    console.log(this.state.movies);
  }

  removeAccents(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
  }

  mappingData = () => {
    const movieList = this.state.movies.map((movie, i) => {
      return <MovieGridItem key={i} movie={movie}></MovieGridItem>;
    });
    return movieList;
  };

  render() {
    console.log("render list");
    return (
      <div className="tab-area">
        <div className="tab-item active">
          <div className="row mb-10 justify-content-center">
            {this.mappingData()}
          </div>
        </div>
      </div>
    );
  }
}
