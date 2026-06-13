import axios from "axios";

const API = axios.create({
  baseURL: "https://dummy-gh1r.onrender.com/api/products",
});

export default API;
