import axios from "axios";
import * as api from "./API_BASE_URL";

class SeatService {
  getSeatsByRoomId = (roomId) => {
    return axios.get(`${api.seatRoomAnonymous}?roomId=${roomId}`);
  };

  getSeatsByShowtimeId = (showtimeId) => {
    return axios.get(`${api.seatRoomAnonymous}?showTimesId=${showtimeId}`);
  };

  getSeatsByRoomIdandShowtimeIdandTheaterId = (roomId, showtimeId, theaterId) => {
    return axios.get(`${api.seatRoomAnonymous}?room=${roomId}&showTimesId=${showtimeId}&theater=${theaterId}`);
  };
}

export default new SeatService();
