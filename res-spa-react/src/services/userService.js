import http from "./httpService";
import _ from "lodash";

function register(user) {
   const validUserProperties = ["username", "password", "email", "firstName", "middleName", "lastName", "jobTitle", "website", "contactNumbers"];
   const userToCreate = _.pick(user, validUserProperties);
   return http.post(`${api}/api/users`, userToCreate);
}

module.exports = {
   register
};
