import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Login from './Login';
import NavBar from './NavBar';
import Header from './Header';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import Home from './Home';
import '../App.css';

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, [props]);

  return (
    <>
      <Router>
        <Header />
        <div className='container'>
          <div className='row'>
            <NavBar />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/new' exact component={NewQuestion} />
              <Route path='/leaderboard' exact component={Leaderboard} />
              <Route path='/Login' exact component={Login} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default connect()(App);
