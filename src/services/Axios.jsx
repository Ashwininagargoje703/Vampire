import { backend_url } from "../http-backend";
import axios from "axios";
import { Cookies } from "react-cookie";
const cookie = new Cookies();
const token = cookie.get("serviceToken");

const Axios = axios.create({
  baseURL: backend_url, // Replace with your API base URL
});

Axios.interceptors.request.use(
  (config) => {
    console.log("token here", token);
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default Axios;
