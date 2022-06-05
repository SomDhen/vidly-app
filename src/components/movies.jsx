// Building the Movies Component
// import React, { Component } from "react";
// import { getMovies } from "../services/fakeMovieService";

// class Movies extends Component {
//   state = {
//     movies: getMovies(),
//   };
//   render() {
//     return (
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Genre</th>
//             <th>Stock</th>
//             <th>Rate</th>
//           </tr>
//         </thead>
//         <tbody>
//           {this.state.movies.map(movie => (
//             <tr>
//               <td>{movie.title}</td>
//               <td>{movie.genre.name}</td>
//               <td>{movie.numberInStock}</td>
//               <td>{movie.dailyRentalRate}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   }
// }

// export default Movies;

// Deleting a Movie
// import React, { Component } from "react";
// import { getMovies } from "../services/fakeMovieService";

// class Movies extends Component {
//   state = {
//     movies: getMovies(),
//   };

//   handleDelete = movie => {
//     // console.log(movie);
//     const movies = this.state.movies.filter(m => m._id !== movie._id);
//     this.setState({ movies: movies });
//   };
//   render() {
//     return (
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Genre</th>
//             <th>Stock</th>
//             <th>Rate</th>
//             <th />
//           </tr>
//         </thead>
//         <tbody>
//           {this.state.movies.map(movie => (
//             <tr key={movie._id}>
//               <td>{movie.title}</td>
//               <td>{movie.genre.name}</td>
//               <td>{movie.numberInStock}</td>
//               <td>{movie.dailyRentalRate}</td>
//               <td>
//                 <button
//                   className="btn btn-danger btn-sm"
//                   onClick={() => this.handleDelete(movie)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   }
// }

// export default Movies;

// Conditional Rendering
// import React, { Component } from "react";
// import { getMovies } from "../services/fakeMovieService";

// class Movies extends Component {
//   state = {
//     movies: getMovies(),
//   };

//   handleDelete = movie => {
//     const movies = this.state.movies.filter(m => m._id !== movie._id);
//     this.setState({ movies: movies });
//   };

//   render() {
//     // if (this.state.movies.length === 0)
//     //   return <p>There are no movies in the database!</p>;
//     const { length: moviesCount } = this.state.movies;
//     if (moviesCount === 0) return <p>There are no movies in the database!</p>;

//     return (
//       <div>
//         {/* <p>Showing {this.state.movies.length} movies in the database.</p> */}
//         <p>Showing {moviesCount} movies in the database.</p>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Genre</th>
//               <th>Stock</th>
//               <th>Rate</th>
//               <th />
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.movies.map(movie => (
//               <tr key={movie._id}>
//                 <td>{movie.title}</td>
//                 <td>{movie.genre.name}</td>
//                 <td>{movie.numberInStock}</td>
//                 <td>{movie.dailyRentalRate}</td>
//                 <td>
//                   <button
//                     className="btn btn-danger btn-sm"
//                     onClick={() => this.handleDelete(movie)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// export default Movies;

// Exercise - Like Button (Composing Components)
// import React, { Component } from "react";
// import { getMovies } from "../services/fakeMovieService";
// import Like from "./common/like";

// class Movies extends Component {
//   state = {
//     movies: getMovies(),
//   };

//   handleDelete = movie => {
//     const movies = this.state.movies.filter(m => m._id !== movie._id);
//     this.setState({ movies: movies });
//   };

//   handleLike = movie => {
//     // console.log("Clicked Liked", movie);
//     const movies = [...this.state.movies];
//     const index = movies.indexOf(movie);
//     movies[index] = { ...movies[index] };
//     movies[index].liked = !movies[index].liked;
//     this.setState({ movies });
//   };

//   render() {
//     const { length: moviesCount } = this.state.movies;
//     if (moviesCount === 0) return <p>There are no movies in the database!</p>;

//     return (
//       <div>
//         <p>Showing {moviesCount} movies in the database.</p>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Genre</th>
//               <th>Stock</th>
//               <th>Rate</th>
//               <th />
//               <th />
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.movies.map(movie => (
//               <tr key={movie._id}>
//                 <td>{movie.title}</td>
//                 <td>{movie.genre.name}</td>
//                 <td>{movie.numberInStock}</td>
//                 <td>{movie.dailyRentalRate}</td>
//                 <td>
//                   <Like
//                     liked={movie.liked}
//                     onClick={() => this.handleLike(movie)}
//                   />
//                 </td>
//                 <td>
//                   <button
//                     className="btn btn-danger btn-sm"
//                     onClick={() => this.handleDelete(movie)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// export default Movies;

// TODO: Pagination, Filtering, and Sorting

// Pagination - Component Interface
// import React, { Component } from "react";
// import { getMovies } from "../services/fakeMovieService";
// import Like from "./common/like";
// import Pagination from "./common/pagination";

// class Movies extends Component {
//   state = {
//     movies: getMovies(),
//     currentPage: 1,
//     pageSize: 4,
//   };

//   handleDelete = movie => {
//     const movies = this.state.movies.filter(m => m._id !== movie._id);
//     this.setState({ movies: movies });
//   };

//   handleLike = movie => {
//     // console.log("Clicked Liked", movie);
//     const movies = [...this.state.movies];
//     const index = movies.indexOf(movie);
//     movies[index] = { ...movies[index] };
//     movies[index].liked = !movies[index].liked;
//     this.setState({ movies });
//   };

//   handlePageChange = page => {
//     // console.log(page);
//     this.setState({ currentPage: page });
//   };

//   render() {
//     const { length: moviesCount } = this.state.movies;
//     const { pageSize, currentPage } = this.state;

//     if (moviesCount === 0) return <p>There are no movies in the database!</p>;

//     return (
//       <div>
//         <p>Showing {moviesCount} movies in the database.</p>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Genre</th>
//               <th>Stock</th>
//               <th>Rate</th>
//               <th />
//               <th />
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.movies.map(movie => (
//               <tr key={movie._id}>
//                 <td>{movie.title}</td>
//                 <td>{movie.genre.name}</td>
//                 <td>{movie.numberInStock}</td>
//                 <td>{movie.dailyRentalRate}</td>
//                 <td>
//                   <Like
//                     liked={movie.liked}
//                     onClick={() => this.handleLike(movie)}
//                   />
//                 </td>
//                 <td>
//                   <button
//                     className="btn btn-danger btn-sm"
//                     onClick={() => this.handleDelete(movie)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <Pagination
//           itemsCount={moviesCount}
//           pageSize={pageSize}
//           currentPage={currentPage}
//           onPageChange={this.handlePageChange}
//         />
//       </div>
//     );
//   }
// }

// export default Movies;

// Pagination - Paginating Data
// import React, { Component } from "react";
// import { getMovies } from "../services/fakeMovieService";
// import Like from "./common/like";
// import Pagination from "./common/pagination";
// import { paginate } from "../utils/paginate";

// class Movies extends Component {
//   state = {
//     movies: getMovies(),
//     currentPage: 1,
//     pageSize: 4,
//   };

//   handleDelete = movie => {
//     const movies = this.state.movies.filter(m => m._id !== movie._id);
//     this.setState({ movies: movies });
//   };

//   handleLike = movie => {
//     // console.log("Clicked Liked", movie);
//     const movies = [...this.state.movies];
//     const index = movies.indexOf(movie);
//     movies[index] = { ...movies[index] };
//     movies[index].liked = !movies[index].liked;
//     this.setState({ movies });
//   };

//   handlePageChange = page => {
//     // console.log(page);
//     this.setState({ currentPage: page });
//   };

//   render() {
//     const { length: moviesCount } = this.state.movies;
//     const { pageSize, currentPage, movies: allMovies } = this.state;

//     if (moviesCount === 0) return <p>There are no movies in the database!</p>;

//     const movies = paginate(allMovies, currentPage, pageSize);

//     return (
//       <div>
//         <p>Showing {moviesCount} movies in the database.</p>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Genre</th>
//               <th>Stock</th>
//               <th>Rate</th>
//               <th />
//               <th />
//             </tr>
//           </thead>
//           <tbody>
//             {movies.map(movie => (
//               <tr key={movie._id}>
//                 <td>{movie.title}</td>
//                 <td>{movie.genre.name}</td>
//                 <td>{movie.numberInStock}</td>
//                 <td>{movie.dailyRentalRate}</td>
//                 <td>
//                   <Like
//                     liked={movie.liked}
//                     onClick={() => this.handleLike(movie)}
//                   />
//                 </td>
//                 <td>
//                   <button
//                     className="btn btn-danger btn-sm"
//                     onClick={() => this.handleDelete(movie)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <Pagination
//           itemsCount={moviesCount}
//           pageSize={pageSize}
//           currentPage={currentPage}
//           onPageChange={this.handlePageChange}
//         />
//       </div>
//     );
//   }
// }

// export default Movies;

// Filtering - Component Interface
// import React, { Component } from "react";
// import { getMovies } from "../services/fakeMovieService";
// import { getGenres } from "../services/fakeGenreService";
// import Like from "./common/like";
// import ListGroup from "./common/listGroup";
// import Pagination from "./common/pagination";
// import { paginate } from "../utils/paginate";

// class Movies extends Component {
//   state = {
//     movies: [],
//     genres: [],
//     currentPage: 1,
//     pageSize: 4,
//   };

//   componentDidMount() {
//     const genres = [{ name: "All Genres" }, ...getGenres()];
//     this.setState({ movies: getMovies(), genres });
//   }

//   handleDelete = movie => {
//     const movies = this.state.movies.filter(m => m._id !== movie._id);
//     this.setState({ movies: movies });
//   };

//   handleLike = movie => {
//     // console.log("Clicked Liked", movie);
//     const movies = [...this.state.movies];
//     const index = movies.indexOf(movie);
//     movies[index] = { ...movies[index] };
//     movies[index].liked = !movies[index].liked;
//     this.setState({ movies });
//   };

//   handlePageChange = page => {
//     // console.log(page);
//     this.setState({ currentPage: page });
//   };

//   handleGenreSelect = genre => {
//     // console.log(genre);
//     this.setState({ selectedGenre: genre, currentPage: 1 });
//   };

//   render() {
//     const { length: moviesCount } = this.state.movies;
//     const {
//       pageSize,
//       currentPage,
//       movies: allMovies,
//       selectedGenre,
//     } = this.state;

//     if (moviesCount === 0) return <p>There are no movies in the database!</p>;

//     const filtered =
//       selectedGenre && selectedGenre._id
//         ? allMovies.filter(m => m.genre._id === selectedGenre._id)
//         : allMovies;

//     const movies = paginate(filtered, currentPage, pageSize);

//     return (
//       <div className="row">
//         <div className="col-3">
//           <ListGroup
//             items={this.state.genres}
//             selectedItem={this.state.selectedGenre}
//             onItemSelect={this.handleGenreSelect}
//           />
//         </div>
//         <div className="col">
//           <p>Showing {filtered.length} movies in the database.</p>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Genre</th>
//                 <th>Stock</th>
//                 <th>Rate</th>
//                 <th />
//                 <th />
//               </tr>
//             </thead>
//             <tbody>
//               {movies.map(movie => (
//                 <tr key={movie._id}>
//                   <td>{movie.title}</td>
//                   <td>{movie.genre.name}</td>
//                   <td>{movie.numberInStock}</td>
//                   <td>{movie.dailyRentalRate}</td>
//                   <td>
//                     <Like
//                       liked={movie.liked}
//                       onClick={() => this.handleLike(movie)}
//                     />
//                   </td>
//                   <td>
//                     <button
//                       className="btn btn-danger btn-sm"
//                       onClick={() => this.handleDelete(movie)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <Pagination
//             itemsCount={filtered.length}
//             pageSize={pageSize}
//             currentPage={currentPage}
//             onPageChange={this.handlePageChange}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default Movies;

// Sorting - Extracting MoviesTable
// import React, { Component } from "react";
// import { getMovies } from "../services/fakeMovieService";
// import { getGenres } from "../services/fakeGenreService";
// import MoviesTable from "./moviesTable";
// import ListGroup from "./common/listGroup";
// import Pagination from "./common/pagination";
// import { paginate } from "../utils/paginate";
// import _ from "lodash";

// class Movies extends Component {
//   state = {
//     movies: [],
//     genres: [],
//     currentPage: 1,
//     pageSize: 4,
//     sortColumn: { path: "title", order: "asc" },
//   };

//   componentDidMount() {
//     const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
//     this.setState({ movies: getMovies(), genres });
//   }

//   handleDelete = movie => {
//     const movies = this.state.movies.filter(m => m._id !== movie._id);
//     this.setState({ movies: movies });
//   };

//   handleLike = movie => {
//     // console.log("Clicked Liked", movie);
//     const movies = [...this.state.movies];
//     const index = movies.indexOf(movie);
//     movies[index] = { ...movies[index] };
//     movies[index].liked = !movies[index].liked;
//     this.setState({ movies });
//   };

//   handlePageChange = page => {
//     // console.log(page);
//     this.setState({ currentPage: page });
//   };

//   handleGenreSelect = genre => {
//     // console.log(genre);
//     this.setState({ selectedGenre: genre, currentPage: 1 });
//   };

//   handleSort = sortColumn => {
//     this.setState({ sortColumn });
//   };

//   getPageData = () => {
//     const {
//       pageSize,
//       currentPage,
//       sortColumn,
//       movies: allMovies,
//       selectedGenre,
//     } = this.state;

//     const filtered =
//       selectedGenre && selectedGenre._id
//         ? allMovies.filter(m => m.genre._id === selectedGenre._id)
//         : allMovies;

//     const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

//     const movies = paginate(sorted, currentPage, pageSize);

//     return { totalCount: filtered.length, data: movies };
//   };

//   render() {
//     const { length: moviesCount } = this.state.movies;
//     const { pageSize, currentPage, sortColumn } = this.state;

//     if (moviesCount === 0) return <p>There are no movies in the database!</p>;

//     const { totalCount, data: movies } = this.getPageData();

//     return (
//       <div className="row">
//         <div className="col-3">
//           <ListGroup
//             items={this.state.genres}
//             selectedItem={this.state.selectedGenre}
//             onItemSelect={this.handleGenreSelect}
//           />
//         </div>
//         <div className="col">
//           <p>Showing {totalCount} movies in the database.</p>
//           <MoviesTable
//             movies={movies}
//             sortColumn={sortColumn}
//             onLike={this.handleLike}
//             onDelete={this.handleDelete}
//             onSort={this.handleSort}
//           />
//           <Pagination
//             itemsCount={totalCount}
//             pageSize={pageSize}
//             currentPage={currentPage}
//             onPageChange={this.handlePageChange}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default Movies;

// Exercise- 2: Movie Form
// => Code Review
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import MoviesTable from "./moviesTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
// import { getMovies, deleteMovie } from "../services/fakeMovieService";
import { getMovies, deleteMovie } from "../services/movieService";
// import { getGenres } from "../services/fakeGenreService";
import { getGenres } from "../services/genreService";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import SearchBox from "./searchBox";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" },
  };

  // componentDidMount() {
  //   const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
  //   this.setState({ movies: getMovies(), genres });
  // }

  // Calling GenreServices from Backend/Server
  async componentDidMount() {
    const { data } = await getGenres();
    const genres = [{ _id: "", name: "All Genres" }, ...data];

    const { data: movies } = await getMovies();
    this.setState({ movies, genres });
  }

  // handleDelete = movie => {
  //   const movies = this.state.movies.filter(m => m._id !== movie._id);
  //   this.setState({ movies: movies });

  //   deleteMovie(movie._id);
  // };

  // To Delete even from Server
  handleDelete = async movie => {
    const originalMovies = this.state.movies;
    const movies = originalMovies.filter(m => m._id !== movie._id);
    this.setState({ movies });

    try {
      await deleteMovie(movie._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This movie has already been deleted.");

      this.setState({ movies: originalMovies });
    }
  };

  handleLike = movie => {
    // console.log("Clicked Liked", movie);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    // console.log(page);
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    // console.log(genre);
    // this.setState({ selectedGenre: genre, currentPage: 1 });
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      movies: allMovies,
      selectedGenre,
      searchQuery,
    } = this.state;

    // const filtered =
    //   selectedGenre && selectedGenre._id
    //     ? allMovies.filter(m => m.genre._id === selectedGenre._id)
    //     : allMovies;

    let filtered = allMovies;
    if (searchQuery)
      filtered = allMovies.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { length: moviesCount } = this.state.movies;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    if (moviesCount === 0) return <p>There are no movies in the database!</p>;

    const { totalCount, data: movies } = this.getPageData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <Link
            to="/movies/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            New Movie
          </Link>
          <p>Showing {totalCount} movies in the database.</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
