import React, { Component, useEffect, useState } from 'react';

import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { AppState } from '../redux/rootStore';
import { AppActions } from '../redux/actions/actions';

import { UserModel } from '../redux/models/UserModel';
import { boundRequestUsers } from '../redux/actions/users/UserAction';
import UserProfile from './UserProfile';


interface LinkStateProps {
  users: UserModel[];
}

interface LinkDispatchProps {
  boundRequestUsers: () => void;
}

type LinkProps = LinkStateProps & LinkDispatchProps;

const mapStateToProps = (state: AppState): LinkStateProps => ({
  users: state.userReducer.users,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, unknown, AppActions>
) => ({
  boundRequestUsers: bindActionCreators(boundRequestUsers, dispatch),
});

function MainPage (props: LinkProps): JSX.Element {
  const dispatch = useDispatch();

  const userState = useSelector((state: AppState) => state.userReducer);

  useEffect(() => {
    dispatch(boundRequestUsers() as any) 
  },[!userState])
  

    return (
      <div>
        <h1>List of users</h1>
        <ul>
          {userState.users.map((user: UserModel) => (
              <UserProfile key={user.id} id={user.id} name={user.name} email={user.email} gender={user.gender} status={user.status}/>
          ))}
        </ul>
      </div>
    );
  
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);