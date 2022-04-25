import { TodoActionTypes, FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS, FETCH_TODO_FAILURE } from './models/actions';

import { Todo } from './models/Todo';

interface TodoState {
    loading: boolean;
    todos: Todo[];
    error: string;
}

const defaultState: TodoState = {
    loading: false,
    todos: [],
    error:''
}

export const todoReducer = (state = defaultState, action: TodoActionTypes): TodoState => {
    switch(action.type) {
        case FETCH_TODO_REQUEST:
            return { loading: true, todos:[], error:'' }
        case FETCH_TODO_SUCCESS:
            return { loading: false, todos: action.todos, error:'' }
        case FETCH_TODO_FAILURE:
            return { loading: false, todos:[], error:action.error }
        default:
            return state;
    }
}