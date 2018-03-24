import axios from "axios";
import actions from "../actions";

const proxy = "https://cors-anywhere.herokuapp.com/";

const makeArtistRequest = term => {
  console.log("artist call");
  return axios.get(`${proxy}https://api.deezer.com/search/artist?q=${term}`, {
    withCredentials: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true"
    }
  });
};

export default {
  getArtist: term => makeArtistRequest(term)
};
