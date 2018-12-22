import axios from "axios";
import { getJwt } from "./authService";

axios.defaults.headers.common["Authorization"] = getJwt() ? `Bearer ${getJwt()}` : null;

export function catchGlobalUnexpectedErrors(callback) {
  axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

    if (!expectedError) {
      callback();
    }

    return Promise.reject(error);
  });
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
  default: axios
};
