import axios from "axios";
import actions from "../actions";

const proxy = "https://cors-anywhere.herokuapp.com/";

const makeAlbumRequest = term => {
  return axios.get(`${proxy}https://api.deezer.com/search/album?q=${term}`, {
    withCredentials: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true"
    }
  });
};

const makeArtistAlbumRequest = id => {
  return axios.get(`${proxy}https://api.deezer.com/artist/${id}/albums`, {
    withCredentials: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true"
    }
  });
};

export default {
  getAlbum: term => makeAlbumRequest(term),
  getArtistAlbum: id => makeArtistAlbumRequest(id)
};
