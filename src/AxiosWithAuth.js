import axios from "axios";

export const axiosWithAuth = () =>
  axios.create({
    baseURL: "https://howto-be.herokuapp.com/api",
    headers: {
      Authorization: localStorage.getItem("token"),
      user_id: localStorage.getItem("user_id")
    }
  });
