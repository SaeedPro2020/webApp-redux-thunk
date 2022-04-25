import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk, { ThunkMiddleware } from "redux-thunk";

import { todoReducer } from "./todo/TodoReducer";
import { AppActions } from "./models/actions";

const logger = createLogger();

export const rootReducer = combineReducers({ todoReducer});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore<AppState, AppActions, unknown, unknown>(
    rootReducer,
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>, logger)
)

