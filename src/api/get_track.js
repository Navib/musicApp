import axios from "axios";
import actions from "../actions";

const proxy = "https://cors-anywhere.herokuapp.com/";

const makeTrackRequest = id => {
  return axios.get(`${proxy}https://api.deezer.com/track/${id}`, {
    withCredentials: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true"
    }
  });
};

export default {
  getTrack: id => makeTrackRequest(id)
};
