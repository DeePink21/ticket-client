import axios from "axios";
import * as api from "./API_BASE_URL";

class PaymentService {
  addPayment = (payment) => {
    // console.log(order)
    return axios.post(api.payments, payment);
  };
}

export default new PaymentService();
