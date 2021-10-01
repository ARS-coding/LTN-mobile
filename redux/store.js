import { createStore, applyMiddleware } from "redux";

import { thunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import userReducer from "./slices/userSlice";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export const store = createStore(userReducer, composedEnhancer);