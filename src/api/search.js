import axios from "axios";
import actions from "../actions";

const makeSearchRequest = (urlExtension, data = {}) =>
  axios.get("https://api.myjson.com/bins/15vnj7", data, {
    withCredentials: false
  });

export default {
  getSearch: () => makeSearchRequest()
};
