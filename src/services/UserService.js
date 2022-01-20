import axios from "axios";
import * as api from "./API_BASE_URL";

class UserService {
  updateUser = (user, token) => {
    return axios.put(`${api.users}/${user.id}`, user, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  };

  //   getOrdersByUserId = (userId) => {
  //     return axios.get(`${api.ordersUser}?user_id=${userId}`);
  //   };
}

export default new UserService();
