import React from "react";
import { Route } from "react-router-dom";
// import Header from '../Header/Header.js';
import { UserManagementContainer } from "../UserManagement/UserManagementContainer";
import { MessageManagementContainer } from "../MessageManagement/MessageManagementContainer";

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
        path="/message-management"
        component={MessageManagementContainer}
        render={props => <MessageManagementContainer />}
      />

    </React.Fragment>
  );
}
