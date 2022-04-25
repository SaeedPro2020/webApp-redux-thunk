import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { logger } from 'redux-logger';
import { AppActions } from './appActions';

import { asyncReducer } from './reducer'

const rootReducer = combineReducers({
    asyncReducer: asyncReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk as 
    ThunkMiddleware<AppState, AppActions>, logger));