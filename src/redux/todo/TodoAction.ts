import  { Dispatch } from 'redux';

import { AppActions } from '../models/actions';

import { FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS, FETCH_TODO_FAILURE } from './models/actions';
import { Todo } from './models/Todo';

const requestTodos = (): AppActions => ({
    type: FETCH_TODO_REQUEST,
    loading: true,
    todos: [],
    error:'',
})

const receiveTodos = (todo: Todo[]): AppActions => ({
    type: FETCH_TODO_SUCCESS,
    loading: false,
    todos: todo,
    error:'',
})

const invalidateTodos = (): AppActions => ({
    type: FETCH_TODO_FAILURE,
    loading: false,
    todos: [],
    error:'Unable to fetch data',
})

export const boundRequestTodos = () => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(requestTodos());
        return fetch('https://gorest.co.in/public/v2/users').then((response) =>
        response.json(),
        (error) => {
            console.log(error);
            dispatch(invalidateTodos());
            }
        ).then((json) => dispatch(receiveTodos(json)))
    }
}