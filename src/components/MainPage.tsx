import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { AppState } from '../redux/rootStore';
import { AppActions } from '../redux/models/actions';

import { Todo } from '../redux/todo/models/Todo';
import { boundRequestTodos } from '../redux/todo/TodoAction';
import UserProfile from './UserProfile';


interface LinkStateProps {
  todos: Todo[];
}

interface LinkDispatchProps {
  boundRequestTodos: () => void;
}

type LinkProps = LinkStateProps & LinkDispatchProps;

const mapStateToProps = (state: AppState): LinkStateProps => ({
  todos: state.todoReducer.todos,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, unknown, AppActions>
) => ({
  boundRequestTodos: bindActionCreators(boundRequestTodos, dispatch),
});

class MainPage extends Component<LinkProps> {
  componentDidMount() {
    this.props.boundRequestTodos();
  }

  render() {
    const { todos } = this.props;
    return (
      <div>
        <h1>List of users</h1>
        <ul>
          {todos.map((todo: Todo) => (
              <UserProfile key={todo.id} id={todo.id} name={todo.name} email={todo.email} gender={todo.gender} status={todo.status}/>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);