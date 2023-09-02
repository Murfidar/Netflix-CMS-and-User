import {
  FETCH_CAST_REQUEST,
  FETCH_CAST_SUCCESS,
  FETCH_CAST_FAILED,
  SET_CAST,
} from "../actions/actionsTypes";

const initialState = {
  cast: {
    0: '',
    1: '',
    2: '',
    3: '',
  },
  loading: true,
  error: null,
};

export default function castReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CAST_REQUEST:
      return { ...state, loading: true };
    case FETCH_CAST_SUCCESS:
      return { ...state, loading: false, cast: action.payload };
    case FETCH_CAST_FAILED:
      return { ...state, loading: false, error: action.payload };
    case SET_CAST:
      return { ...state, cast: action.payload };
    default:
      return state;
  }
}
