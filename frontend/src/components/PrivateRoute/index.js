import React from "react";
import { navigate } from "gatsby";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!isLoggedIn() && location.pathname !== `/sector`) {
    navigate("/comming-soon.js");
    return null;
  }
  return <Component {...rest} />;
};
export default PrivateRoute;
