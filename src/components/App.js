import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Login from './Login';
import NavBar from './NavBar';
import Header from './Header';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import Home from './Home';
import ViewQuestion from './ViewQuestion';
import '../App.css';
import NotFound from './404/NotFound';

function App({ dispatch, authedUser }) {
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className='container'>
        <div className='row'>
          <NavBar />
          {!authedUser ? (
            <Login />
          ) : (
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/add' exact component={NewQuestion} />
              <Route path='/leaderboard' exact component={Leaderboard} />
              <Route path='/login' exact component={Login} />
              <Route path='/question/:id' exact component={ViewQuestion} />
              <Route component={NotFound} />
            </Switch>
          )}
        </div>
      </div>
    </>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(App);
