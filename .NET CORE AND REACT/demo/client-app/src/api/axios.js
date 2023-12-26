import axios from "axios";
import { toast } from "react-toastify";
import { router } from "../router/Routes";

const sleep = (delay) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = "http://localhost:5000/api";

//apiden responce alındığında beklemek için sleep fonksiyonu kullanılacak.
axios.interceptors.response.use(
  async (response) => {
    await sleep(1000);
    return response;
  },
  (error) => {
    const { data, status } = error.response;
    switch (status) {
      case 400:
        if (data.errors) {
          const modalStateErrors = [];
          for (const key in data.errors) {
            if (data.errors[key]) {
              modalStateErrors.push(data.errors[key]);
            }
          }
          throw modalStateErrors.flat();
        } else {
          toast.error(data);
        }
        break;
      case 401:
        toast.error("unauthorised");
        break;
      case 403:
        toast.error("forbidden");
        break;
      case 404:
        router.navigate("/not-found");
        break;
      case 500:
        toast.error("server error");
        break;
    }
    return Promise.reject(error);
  }
);

const responseBody = (response) => response.data;

const request = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  delete: (url) => axios.delete(url).then(responseBody),
};

const Activities = {
  list: () => request.get(`/Activities`),
  details: (id) => request.get(`/Activities/${id}`),
  create: (activity) => request.post(`/Activities`, activity),
  update: (activity) => request.put(`/Activities/${activity.id}`, activity),
  delete: (id) => request.delete(`/Activities/${id}`),
};

const agent = {
  Activities,
};

export default agent;
