import axios from "axios";
import * as api from "./API_BASE_URL";

class MovieService {
  getAll = async () => {
    return await axios.get(api.movies);
  };

  getComingSoon = async () => {
    return await axios.get(api.comingSoon);
  };

  getNowShowing = async () => {
    return await axios.get(api.nowShowing);
  };

  getMovieById(movieId) {
    return axios.get(api.movies + "/" + movieId);
    // return axios.get("http://localhost:3000/movies/100");
  }

  //     getAll() {
  //       return http.get("/movies");
  //     }

  //     get(id) {
  //       return http.get(`/movies/${id}`);
  //     }

  //     create(data) {
  //       return http.post("/movies", data);
  //     }

  //     update(id, data) {
  //       return http.put(`/movies/${id}`, data);
  //     }

  //     delete(id) {
  //       return http.delete(`/movies/${id}`);
  //     }

  //     deleteAll() {
  //       return http.delete(`/movies`);
  //     }

  //     findByName(name) {
  //       return http.get(`/movies?name=${name}`);
  //     }
}

export default new MovieService();
