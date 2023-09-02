import { combineReducers } from "redux";

import movieReducer from "./movieReducer";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  movie: movieReducer,
});

export default rootReducer;
