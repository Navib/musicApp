import axios from "axios";
import actions from "../actions";

const proxy = "https://cors-anywhere.herokuapp.com/";

const makeSearchRequest = term => {
  console.log("axios:", term);
  return axios.get(`${proxy}https://api.deezer.com/search?q=${term}`, {
    withCredentials: false
  });
};

export default {
  getSearch: term => makeSearchRequest(term)
};
