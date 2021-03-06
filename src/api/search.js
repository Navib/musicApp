import axios from "axios";
import actions from "../actions";

const proxy = "https://cors-anywhere.herokuapp.com/";

const makeSearchRequest = term => {
  return axios.get(`${proxy}https://api.deezer.com/search/?q=${term}`, {
    withCredentials: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true"
    }
  });
};

export default {
  getSearch: term => makeSearchRequest(term)
};
