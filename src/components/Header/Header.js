import React from 'react';
import {
  Link
} from "react-router-dom";
import "./Header.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import globalStyles from "../../assets/global-styles/bootstrap.module.css";
import cx from "classnames";

export default function Header() {
  return (
    <React.Fragment>
      <div className="headerLayout">
      <Link className="navbar-brand" to="/">
        <img src={require('../../assets/Global/VGH-logo.png')} style={{"marginLeft":"123px", "marginTop":"9px"}}  width="200px" height="51" alt=""></img>
      </Link>
      </div>
    </React.Fragment >
  );
}
