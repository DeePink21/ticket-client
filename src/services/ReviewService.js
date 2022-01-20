import axios from "axios";
import * as api from "./API_BASE_URL";

class ReviewService {
  getReviews = () => {
    return axios.get(`${api.reviews}`);
  };

  postReview = (review) => {
    return axios.post(`${api.reviews}`, review);
  };
}

export default new ReviewService();
