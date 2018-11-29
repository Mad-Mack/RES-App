import http from "./httpService";
// import config from "config";

const api = "http://localhost:5000";

function login({ username, password }) {
   return http.post(`${api}/api/auth`, { username, password });
}

export default { login };
