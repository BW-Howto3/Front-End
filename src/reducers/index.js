import {
  FETCHING_START,
  FETCHING_SUCCESS,
  FETCHING_ERROR,
  CREATE_START,
  CREATE_SUCCESS,
  CREATE_ERROR
} from "../actions";

const initialState = {
  isLoading: false,
  error: "",
  user: {},
  howtos: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
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
