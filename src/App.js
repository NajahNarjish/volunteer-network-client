import React, { useState, createContext } from 'react';
import './App.css';
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
import Events from './component/Events/Events';

export const VolunteerContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  // test
  // const [projects, setProjects] = useState([]);
  return (
    <VolunteerContext.Provider value={[loggedInUser, setLoggedInUser]}>
      
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
          <Route path = "/events">
            <Events></Events>
          </Route>
          {/* <Route path = "/addevents">
            <AddEvents></AddEvents>
          </Route> */}
        </Switch>

      </Router>    
    </VolunteerContext.Provider> 
  );
}
export default App;
