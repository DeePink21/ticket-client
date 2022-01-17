import axios from "axios";
import * as api from "./API_BASE_URL";

class ShowtimeService {
  getShowTimesByMovieId = (movieId) => {
    return axios.get(`${api.showTimesAnonymous}?movieId=${movieId}`);
  };

  getShowTimeById = (showtimeId) => {
    return axios.get(`${api.showTimeAnonymous}/${showtimeId}`);
  };
}

export default new ShowtimeService();
