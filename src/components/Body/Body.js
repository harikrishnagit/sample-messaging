import React from "react";
import { Route } from "react-router-dom";
// import Header from '../Header/Header.js';
//import Home from '../Home/Home.js';
import { UserManagementContainer } from "../UserManagement/UserManagementContainer";
import Signup from "../Signup/Signup"
import Login from "../Login/Login"
import EmployerHome from "../EmployerHome/EmployerHome"
import { Container} from 'semantic-ui-react'
export default function Navbar() {
  return (
    <React.Fragment>
      <Route
        exact
        path="/user-management"
        component={UserManagementContainer}
        render={props => <UserManagementContainer />}
      />
      <Route
        exact
        path="/signup"
        component={Signup}
        render={props => <Signup />}
      />
      <Route
        exact
        path="/login"
        component={Login}
        render={props => <Login />}
      />
      <Route
        exact
        path="/employerHome"
        component={EmployerHome}
        render={props => <EmployerHome />}
      />

      <Route
        exact
        path="/"
        render={props => <Container style={{height: '800px'}}></Container>}
      />
    </React.Fragment>
  );
}
