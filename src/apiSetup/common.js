import axios from "axios";

axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "access_token"
)}`;

const instance = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.request.use(
  function (config) {
    console.log(config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  function (response) {
    console.log("vao day r hhehe");
    console.log(response);
    return response;
  },
  async function (error) {
    const config = error.config;
    const response = error?.response;
    if (response.status === 401) {
      console.log("vao day r");
      //   window.location.href = "/login";
      return Promise.reject(error);
    }
    if (response.status === 403) {
      console.log("vao day admin r");
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default instance;
