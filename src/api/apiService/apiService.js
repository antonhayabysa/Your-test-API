import axios from "axios";

const api = axios.create({
  baseURL: "https://yourtestapi.com/api/posts/",
});

export default api;
