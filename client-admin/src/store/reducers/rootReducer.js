import { combineReducers } from "redux";

import genreReducer from "./genreReducer";
import movieReducer from "./movieReducer";
import castReducer from "./castReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  user: userReducer,
  movie: movieReducer,
  genre: genreReducer,
  cast: castReducer,
});

export default rootReducer;
