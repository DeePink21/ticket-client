import axios from "axios";
import * as api from "./API_BASE_URL";

class PromoService {
  verifyPromoCode = (promoCode, movieId) => {
    return axios.get(
      `${api.checkPromoCode}?code=${promoCode}&movie=${movieId}`
    );
  };
}

export default new PromoService();
