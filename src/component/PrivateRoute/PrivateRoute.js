import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { VolunteerContext } from '../../App';

const PrivateRoute = ({children, ...rest}) => {
    const [ loggedInUser, setLoggedInUser] = useContext(VolunteerContext);

    return (
        <Route
          {...rest} render={({ location }) =>
          loggedInUser.email ? (children) : (<Redirect to={{
                                                  pathname: "/login",
                                                  state: { from: location }
                                                }}
                                              />
                                            )
      }
    />
    );
};

export default PrivateRoute;