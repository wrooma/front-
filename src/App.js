import React from 'react';
import './App.css';
import Nav from './Nav.js';
import Login from './Login.js';
import SignUp from './SignUp.js';
import Adaptation from './Adaptation.js';
import MainPage from './MainPage.js';
import PrivateRoute from './PrivateRoute';
import { AuthContext } from './context/auth';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <AuthContext.Provider value={false}>
      <Router>
        <div className="App">
          <Nav />  
          <Switch>
            <Route path="/" exact component={MainPage}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
            <PrivateRoute path="/adaptation" component={Adaptation}/>
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
