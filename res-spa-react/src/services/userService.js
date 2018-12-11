import http from "./httpService";
import _ from "lodash";
import { apiEndpoint } from "../config/default.json";

function register(user) {
   const validUserProperties = ["userName", "password", "email", "firstName", "middleName", "lastName"];
   const userToCreate = _.pick(user, validUserProperties);
   return http.post(`${apiEndpoint}/api/users/register`, userToCreate);
}

export default { register };
