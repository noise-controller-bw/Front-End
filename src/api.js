import axios from "axios";

export default axios.create({
  baseURL: "https://noise-controller-buildweek.herokuapp.com/"
});
