import http from "./httpService";
import config from "../config.json";

export function getGenres() {
  return http.get(config.apiUrl + "/genres");
}

// For Testing the Codes with Object Destructuring (This object Destructure is not working)
// import http from "./httpService";
// import { apiUrl } from "../config.json";

// export function getGenres() {
//   return http.get(apiUrl + "/genres");
// }
