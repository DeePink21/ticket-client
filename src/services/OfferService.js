import axios from "axios";
import * as api from "./API_BASE_URL";

class OfferService {
  getOfferById = (offerId) => {
    return axios.get(`${api.offers}?${offerId}`);
  };
}

export default new OfferService();
