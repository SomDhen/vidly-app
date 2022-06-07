// import React from "react";

// const MovieForm = ({ match, history }) => {
//   return (
//     <div>
//       <h1>Moves Form {match.params.id}</h1>
//       <button
//         className="btn btn-primary"
//         onClick={() => history.push("/movies")}
//       >
//         Save
//       </button>
//     </div>
//   );
// };

// export default MovieForm;

// Exercise - 2: Movie Form
// => Code Review

// import React from "react";
// import Joi from "joi-browser";
// import Form from "./common/form";
// import { getGenres } from "../services/fakeGenreService";
// import { getMovie, saveMovie } from "../services/fakeMovieService";

// class MovieForm extends Form {
//   state = {
//     data: {
//       title: "",
//       genreId: "",
//       numberInStock: "",
//       dailyRentalRate: "",
//     },
//     genres: [],
//     errors: {},
//   };

//   schema = {
//     _id: Joi.string(),
//     title: Joi.string().required().label("Title"),
//     genreId: Joi.string().required().label("Genre"),
//     numberInStock: Joi.number()
//       .required()
//       .min(0)
//       .max(100)
//       .label("Number In Stock"),
//     dailyRentalRate: Joi.number()
//       .required()
//       .min(0)
//       .max(10)
//       .label("Daily Rental Rate"),
//   };

//   componentDidMount() {
//     const genres = getGenres();
//     this.setState({ genres });

//     const movieId = this.props.match.params.id;
//     if (movieId === "new") return;

//     const movie = getMovie(movieId);
//     if (!movie) return this.props.history.replace("/not-found");

//     this.setState({ data: this.mapToViewModel(movie) });
//   }

//   mapToViewModel(movie) {
//     return {
//       _id: movie._id,
//       title: movie.title,
//       genreId: movie.genre._id,
//       numberInStock: movie.numberInStock,
//       dailyRentalRate: movie.dailyRentalRate,
//     };
//   }

//   doSubmit = () => {
//     saveMovie(this.state.data);

//     this.props.history.push("/movies");
//   };

//   render() {
//     return (
//       <div>
//         <h2>Movie Form</h2>
//         <form onSubmit={this.handleSubmit}>
//           {this.renderInput("title", "Tittle")}
//           {this.renderSelect("genreId", "Genre", this.state.genres)}
//           {this.renderInput("numberInStock", "Number In Stock", "number")}
//           {this.renderInput("dailyRentalRate", "Rate")}
//           {this.renderButton("Save")}
//         </form>
//       </div>
//     );
//   }
// }

// export default MovieForm;

// Exercise - Connect MovieForm to the Backend
// Solution: Populating the Form
import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
// import { getGenres } from "../services/fakeGenreService";
import { getGenres } from "../services/genreService";
// import { getMovie, saveMovie } from "../services/fakeMovieService";
import { getMovie, saveMovie } from "../services/movieService";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number In Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate"),
  };

  // async componentDidMount() {
  //   const { data: genres } = await getGenres();
  //   this.setState({ genres });

  //   const movieId = this.props.match.params.id;
  //   if (movieId === "new") return;

  //   try {
  //     const { data: movie } = await getMovie(movieId);
  //     this.setState({ data: this.mapToViewModel(movie) });
  //   } catch (ex) {
  //     if (ex.response && ex.response.status === 404)
  //       this.props.history.replace("/not-found");
  //   }
  // }

  // Refactoring above Method/componentDidMount().

  async populateGenres() {
    const { data: genres } = await getGenres();
    this.setState({ genres });
  }

  async populateMovie() {
    try {
      const movieId = this.props.match.params.id;
      if (movieId === "new") return;
      const { data: movie } = await getMovie(movieId);
      this.setState({ data: this.mapToViewModel(movie) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    this.populateGenres();
    this.populateMovie();
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  doSubmit = async () => {
    await saveMovie(this.state.data);

    this.props.history.push("/movies");
  };

  render() {
    return (
      <div>
        <h2>Movie Form</h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Tittle")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number In Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
