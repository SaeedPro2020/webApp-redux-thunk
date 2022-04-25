import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk, { ThunkMiddleware } from "redux-thunk";

import { userReducer } from "./reducers/UserReducer";
import { AppActions } from "./actions/users/actions";

const logger = createLogger();

export const rootReducer = combineReducers({ userReducer});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore<AppState, AppActions, unknown, unknown>(
    rootReducer,
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>, logger)
)

