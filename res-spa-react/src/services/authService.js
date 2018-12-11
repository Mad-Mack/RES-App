import http from "./httpService";
import { apiEndpoint } from "../config/default.json";

function login({ username, password }) {
   return http.post(`${apiEndpoint}/api/auth/login`, { username, password });
}

export default { login };
