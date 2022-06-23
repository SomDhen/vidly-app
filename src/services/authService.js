// import http from "./httpService";
// // import { apiUrl } from "../config.json";

// // const apiEndPoint = apiUrl + "/auth";
// const apiEndPoint = "http://localhost:3900/api/auth";

// export function login(email, password) {
//   return http.post(apiEndPoint, { email, password });
// }

// Refactoring (Authentication/ JSON Web Token Key)
import jwtDecode from "jwt-decode";
import http from "./httpService";
// import { apiUrl } from "../config.json";

// const apiEndPoint = apiUrl + "/auth";
const apiEndPoint = "http://localhost:3900/api/auth";
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndPoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};
