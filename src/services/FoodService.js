import axios from "axios";
import * as api from "./API_BASE_URL";

class FoodService {
  getFoods = () => {
    return axios.get(api.baseurl + "concessions?category_id=1");
  };
}

export default new FoodService();
