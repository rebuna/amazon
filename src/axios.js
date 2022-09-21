import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5001/e-web-60cc5/us-central1/api",
});
export default instance;
