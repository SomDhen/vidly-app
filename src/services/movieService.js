// import http from "./httpService";
// // import config from "../config.json";

// const apiEndPoint = "http://localhost:3900/api/movies";
// // const apiEndPoint = config + "/movies";

// export function getMovies() {
//   return http.get(apiEndPoint);
// }

// export function deleteMovie(movieId) {
//   return http.delete(apiEndPoint + "/" + movieId);
// }

// For Testing Codes with Object Destructuring
// import http from "./httpService";
// // import config from "../config.json";
// import { apiUrl } from "../config.json";

// // const apiEndPoint = "http://localhost:3900/api/movies";
// const apiEndPoint = apiUrl + "/movies";

// export function getMovies() {
//   return http.get(apiEndPoint);
// }

// export function deleteMovie(movieId) {
//   return http.delete(apiEndPoint + "/" + movieId);
// }

// Exercise - Connect MovieForm to the Backend
// Solution - Populating the Form

// import http from "./httpService";
// // import config from "../config.json";
// // import { apiUrl } from "../config.json";

// const apiEndPoint = "http://localhost:3900/api/movies";
// // const apiEndPoint = apiUrl + "/movies";

// export function getMovies() {
//   return http.get(apiEndPoint);
// }

// export function getMovie(movieId) {
//   return http.get(apiEndPoint + "/" + movieId);
// }

// export function saveMovie(movie) {
//   if (movie._id) {
//     const body = { ...movie };
//     delete body._id;
//     return http.put(apiEndPoint + "/" + movie._id, body);
//   }

//   return http.post(apiEndPoint, movie);
// }

// export function deleteMovie(movieId) {
//   return http.delete(apiEndPoint + "/" + movieId);
// }

// Refactoring
import http from "./httpService";
// import config from "../config.json";
// import { apiUrl } from "../config.json";

const apiEndPoint = "http://localhost:3900/api/movies";
// const apiEndPoint = apiUrl + "/movies";

function movieUrl(id) {
  // return apiEndPoint + "/" + id;
  return `${apiEndPoint}/${id}`;
}

export function getMovies() {
  return http.get(apiEndPoint);
}

export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }

  return http.post(apiEndPoint, movie);
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}
