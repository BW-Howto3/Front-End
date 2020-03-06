import {
  FETCHING_START,
  FETCHING_SUCCESS,
  FETCHING_ERROR,
  CREATE_START,
  CREATE_SUCCESS,
  CREATE_ERROR,
  EDIT_START,
  EDIT_SUCCESS,
  EDIT_ERROR,
  DELETE_START,
  DELETE_SUCCESS,
  DELETE_ERROR
} from "../actions";

const initialState = {
  isLoading: false,
  error: "",
  user: {},
  howtos: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_START:
      return { ...state, isLoading: true, error: "" };
    case CREATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        howtos: [...state.howtos, action.payload]
      };
    case CREATE_ERROR:
      return { ...state, isLoading: false, error: "Error creating a post." };
    case EDIT_START:
      return { ...state, isLoading: true, error: "" };
    case EDIT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        howtos: state.howtos.map((post) =>
          post.id === action.payload.id
            ? { ...post, ...action.payload.data }
            : post
        )
      };
    case EDIT_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case DELETE_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        howtos: state.howtos.filter((post) => post.id !== action.payload)
      };
    case FETCHING_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCHING_SUCCESS:
      return { ...state, isLoading: false, howtos: action.payload };
    case FETCHING_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
