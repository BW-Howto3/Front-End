import { axiosWithAuth } from "../AxiosWithAuth";

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_ERROR = "FETCHING_ERROR";
export const CREATE_START = "CREATE_START";
export const CREATE_SUCCESS = "CREATE_SUCCESS";
export const CREATE_ERROR = "CREATE_ERROR";
export const EDIT_START = "EDIT_START";
export const EDIT_SUCCESS = "EDIT_SUCCESS";
export const EDIT_ERROR = "EDIT_ERROR";
export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_ERROR = "DELETE_ERROR";

export const fetchHowTo = () => (dispatch) => {
  dispatch({ type: FETCHING_START });
  axiosWithAuth()
    .get("/howto")
    .then((response) =>
      dispatch({ type: FETCHING_SUCCESS, payload: response.data })
    )
    .catch((error) => dispatch({ type: FETCHING_ERROR, payload: "Error" }));
};

export const createHowTo = (post) => (dispatch) => {
  dispatch({ type: CREATE_START });
  axiosWithAuth()
    .post("/howto", post)
    .then((res) => dispatch({ type: CREATE_SUCCESS, payload: res.data }))
    .catch((err) =>
      dispatch({ type: CREATE_ERROR, payload: "Error creating a new post." })
    );
};

export const editHowTo = (post) => (dispatch) => {
  dispatch({ type: EDIT_START });
  axiosWithAuth()
    .put(`/howto/${post.id}`, post)
    .then((res) =>
      dispatch({
        type: EDIT_SUCCESS,
        payload: { ...res.data, id: post.id }
      })
    )
    .catch((err) =>
      dispatch({ type: EDIT_ERROR, payload: "Error editing a post." })
    );
};

export const deleteHowTo = (id) => (dispatch) => {
  dispatch({ type: DELETE_START });
  axiosWithAuth()
    .delete(`/howto/${id}`)
    .then((res) =>
      dispatch({ type: DELETE_SUCCESS, payload: res.data.deleted_howto.id })
    )
    .catch((err) =>
      dispatch({ type: DELETE_ERROR, payload: "Error deleting a post" })
    );
};
