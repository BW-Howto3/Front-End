
import { axiosWithAuth } from "../AxiosWithAuth";

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_ERROR = "FETCHING_ERROR";
export const CREATE_START = "CREATE_START";
export const CREATE_SUCCESS = "CREATE_SUCCESS";
export const CREATE_ERROR = "CREATE_ERROR";

export const createHowTo = (post) => (dispatch) => {
  dispatch({ type: CREATE_START });
  axiosWithAuth()
    .post("/howto", post)
    .then((res) => dispatch({ type: CREATE_SUCCESS, payload: res.data }))
    .catch((err) =>
      dispatch({ type: CREATE_ERROR, payload: "Error creating a new post." })
    );
};
