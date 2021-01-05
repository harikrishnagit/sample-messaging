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
      {}
      < div className={cx(
        globalStyles['d-block'],
        globalStyles['p-2'],
        globalStyles['bg-dark'],
        globalStyles['text-white'])
      }>
        <div className={globalStyles['container-fluid']}>
          <div className={cx(globalStyles.row, globalStyles['justify-content-between'])}>
            <div className={globalStyles.col}>
              Simple Message Producer</div>

            <div className={cx(globalStyles['col-auto'], globalStyles['ml-auto'])}>
              <div className={globalStyles.row}>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="col nopadding">
          <h2>Simple Message Producer</h2>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/user-management">User Management</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/message-management">Message Management</Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment >
  );
}
