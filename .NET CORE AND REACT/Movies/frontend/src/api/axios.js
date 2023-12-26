import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";

const responseBody = (response) => response.data;

const request = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  delete: (url) => axios.delete(url).then(responseBody),
};

const Movies = {
  list: () => request.get("/Movies"),
  detail: (id) => request.get(`/Movies/${id}`),
  delete: (id) => request.delete(`/Movies/${id}`),
  create: (movie) => request.post("/Movies", movie),
  update: (movie) => request.put(`/Movies/${movie.id}`, movie),
};

const agent = {
  Movies,
};

export default agent;
