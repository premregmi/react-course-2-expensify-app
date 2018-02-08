import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


export const PublicRoute = ({
    isAuthencated,
    component: Component,
    ...rest
}) => (
  <Route {...rest} component={(props) => (
    isAuthencated ? (
      <Redirect to="/dashboard" />
    ) : (
      <Component{...props} />
    )
  )} />
);

const mapStateToProps = (state) => ({
  isAuthencated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
