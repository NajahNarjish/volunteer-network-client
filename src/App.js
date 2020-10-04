import React, { useState, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import fakedata from '../src/fakedata/fakedata.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Register from './component/Register/Register';
import Login from './component/Login/Login';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

export const VolunteerContext = createContext();

function App() {
  const fakeProjects = fakedata;
  const [projects, setProjects] = useState(fakeProjects);

  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <VolunteerContext.Provider value={[projects, setProjects, loggedInUser, setLoggedInUser]}>
      {/* <p>email: {loggedInUser.email}</p>  */}
      <Router>
        <Header></Header>
        <Switch>
          <Route path = "/home">
            <Home></Home>
          </Route>
          {/* <PrivateRoute path = "/register">
            <Register></Register>
          </PrivateRoute> */}
          <PrivateRoute path = "/register/:eventKey">
            <Register></Register>
          </PrivateRoute>
          <Route path = "/login">
            <Login></Login>
          </Route>
        </Switch>

      </Router>    
    </VolunteerContext.Provider> 
  );
}
export default App;
