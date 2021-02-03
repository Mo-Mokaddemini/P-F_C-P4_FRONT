import React, { Fragment, useEffect } from "react";
import "../App.css";
import { Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";


const RouteVisitor = ({ component: Component, ...rest }) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <Route
      {...rest}
      render={(props) => (
        <Fragment>
          <Navbar />
        </Fragment>
      )}
    />
  );
};

export default RouteVisitor;