import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_API,
  headers: {
    "Content-type": "application/json",
  },
});

axiosClient.interceptors.request.use((request) => requestHandler(request));

axiosClient.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

const errorHandler = (error) => {
  console.log("error", error);
  /*
   * When response code is 401, try to refresh the token or logOut.
   * Eject the interceptor so it doesn't loop in case
   * token refresh causes the 401 response
   */
  if (error.response.status === 401) {
    // TODO: refresh token or logout
    // clear old token
    localStorage.clear();
    // redirect to login page
    window.location.href = window.location.origin + "/login";
    // TODO: toast message or warning
  }
  if (error.response.status === 415) {
    // show toast message chung là bạn không có quyền
  }

  // server error
  if (error.response.status === 500) {
    // TODO: toast message or warning
  }

  return Promise.reject(error.response.data);
};

const successHandler = (response) => {
  return response.data;
};

const requestHandler = (request) => {
  const token = localStorage.getItem("token");

  if (token) {
    request.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return request;
};

export default axiosClient;
