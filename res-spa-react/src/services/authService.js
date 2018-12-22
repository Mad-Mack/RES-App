import jwtDecode from "jwt-decode";
import http from "./httpService";
import { apiEndpoint } from "../config/default.json";

export function login({ username, password }) {
  return http.post(`${apiEndpoint}/api/auth/login`, { username, password });
}

export function getCurrentUserFromJwt() {
  const token = getJwt();
  if (!token) return null;
  const user = jwtDecode(token);

  return user;
}

export function getJwt() {
  return localStorage.getItem("token");
}

export function logOut() {
  localStorage.removeItem("token");
}

export default {
  login,
  getJwt,
  logOut,
  getCurrentUserFromJwt
};
