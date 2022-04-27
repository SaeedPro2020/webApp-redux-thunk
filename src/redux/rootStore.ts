import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk, { ThunkMiddleware } from "redux-thunk";

import { userReducer } from "./reducers/UserReducer";
import { AppActions } from "./actions/actions";
import { postReducer } from "./reducers/PostReducer";
import { commentReducer } from "./reducers/CommentReducer";

const logger = createLogger();

export const rootReducer = combineReducers({ userReducer, postReducer, commentReducer});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore<AppState, AppActions, unknown, unknown>(
    rootReducer,
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>, logger)
)

