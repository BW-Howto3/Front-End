import axios from "axios";

export const axiosWithAuth = () =>
  axios.create({
    baseURL: "https://howto-be.herokuapp.com/api",
    headers: {
      authorization: localStorage.getItem("token")
    }
  });
