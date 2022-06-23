// import React from "react";
// import Like from "./common/like";

// const MoviesTable = props => {
//   const { movies, onDelete, onLike, onSort } = props;

//   return (
//     <table className="table">
//       <thead>
//         <tr>
//           <th onClick={() => onSort("title")}>Title</th>
//           <th onClick={() => onSort("genre.name")}>Genre</th>
//           <th onClick={() => onSort("numberInStock")}>Stock</th>
//           <th onClick={() => onSort("dailyRentalRate")}>Rate</th>
//           <th />
//           <th />
//         </tr>
//       </thead>
//       <tbody>
//         {movies.map(movie => (
//           <tr key={movie._id}>
//             <td>{movie.title}</td>
//             <td>{movie.genre.name}</td>
//             <td>{movie.numberInStock}</td>
//             <td>{movie.dailyRentalRate}</td>
//             <td>
//               <Like liked={movie.liked} onClick={() => onLike(movie)} />
//             </td>
//             <td>
//               <button
//                 className="btn btn-danger btn-sm"
//                 onClick={() => onDelete(movie)}
//               >
//                 Delete
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default MoviesTable;

// Sorting - Moving the Responsibility
// import React, { Component } from "react";
// import Like from "./common/like";

// class MoviesTable extends Component {
//   raiseSort = path => {
//     const sortColumn = { ...this.props.sortColumn };
//     if (sortColumn.path === path)
//       sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
//     else {
//       sortColumn.path = path;
//       sortColumn.order = "asc";
//     }
//     this.props.onSort(sortColumn);
//   };

//   render() {
//     const { movies, onDelete, onLike } = this.props;

//     return (
//       <table className="table">
//         <thead>
//           <tr>
//             <th onClick={() => this.raiseSort("title")}>Title</th>
//             <th onClick={() => this.raiseSort("genre.name")}>Genre</th>
//             <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
//             <th onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
//             <th />
//             <th />
//           </tr>
//         </thead>
//         <tbody>
//           {movies.map(movie => (
//             <tr key={movie._id}>
//               <td>{movie.title}</td>
//               <td>{movie.genre.name}</td>
//               <td>{movie.numberInStock}</td>
//               <td>{movie.dailyRentalRate}</td>
//               <td>
//                 <Like liked={movie.liked} onClick={() => onLike(movie)} />
//               </td>
//               <td>
//                 <button
//                   className="btn btn-danger btn-sm"
//                   onClick={() => onDelete(movie)}
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

// export default MoviesTable;

// Sorting - Extracting TableHeader
// import React, { Component } from "react";
// import Table from "./common/table";
// import Like from "./common/like";

// class MoviesTable extends Component {
//   columns = [
//     { path: "title", label: "Title" },
//     { path: "genre.name", label: "Genre" },
//     { path: "numberInStock", label: "Stock" },
//     { path: "dailyRentalRate", label: "Rate" },
//     {
//       key: "like",
//       content: movie => (
//         <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
//       ),
//     },
//     {
//       key: "delete",
//       content: movie => (
//         <button
//           className="btn btn-danger btn-sm"
//           onClick={() => this.props.onDelete(movie)}
//         >
//           Delete
//         </button>
//       ),
//     },
//   ];

//   render() {
//     const { movies, onSort, sortColumn } = this.props;

//     return (
//       <Table
//         columns={this.columns}
//         data={movies}
//         sortColumn={sortColumn}
//         onSort={onSort}
//       />
//     );
//   }
// }

// export default MoviesTable;

// Routing - Linking to the MovieForm
import React, { Component } from "react";
import auth from "../services/authService";
import { Link } from "react-router-dom";
import Table from "./common/table";
import Like from "./common/like";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>,
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: movie => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
  ];

  deleteColumn = {
    key: "delete",
    content: movie => (
      <button
        className="btn btn-danger btn-sm"
        onClick={() => this.props.onDelete(movie)}
      >
        Delete
      </button>
    ),
  };

  constructor() {
    super();
    const user = auth.getCurrentUser();
    if (user && user.isAdmin) this.columns.push(this.deleteColumn);
  }

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
