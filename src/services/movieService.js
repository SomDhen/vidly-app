import http from "./httpService";
// import { apiUrl } from "../config.json";

const apiEndPoint = "http://localhost:3900/api/movies";
// const apiEndPoint = apiUrl + "/movies";

export function getMovies() {
  return http.get(apiEndPoint);
}

export function deleteMovie(movieId) {
  return http.delete(apiEndPoint + "/" + movieId);
}
