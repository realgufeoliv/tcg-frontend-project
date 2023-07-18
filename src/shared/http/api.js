import axios from "axios";
import store from "./../../store";

import urls from "./urls";

const baseURL = urls.baseURL;

/**
 * create api resource
 *
 * @type {AxiosInstance}
 */
const api = axios.create({
  baseURL: baseURL,
});

api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response.data;
  },
  function (error) {
    if (error.response.status === 401) {
      store.dispatch("auth/signOutAction").then(() => window.location.reload());
    }

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error.response.data);
  }
);

export { baseURL };

export default api;
