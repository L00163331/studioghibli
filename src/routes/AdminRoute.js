import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getUser} from '../service/AuthService';



const AdminRoute = ({ component: Component, ...rest}) => {
  return (
    <Route 
      {...rest}
      render={props => {
        return getUser().username === "darshan"  ? <Component {...props} />
        : <Redirect to={{ pathname: '/course'}} />
      }}
    />
  )
}

export default AdminRoute