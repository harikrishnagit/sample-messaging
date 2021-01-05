import React from 'react';
import {
  Link
} from "react-router-dom";
import "./Footer.css";
import { Container } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import globalStyles from "../../assets/global-styles/bootstrap.module.css";
import cx from "classnames";

export default function Footer() {
  return (
    <React.Fragment>
      <div className="footerLayout">
        <Container style={{height:'40%', textAlign:'center', position:'relative', top:'20px'}}>
        <ul id="menu">
          <li>Privacy</li>
          <li>Terms</li>
          <li>About Us</li>
          <li>Sitemap</li>
        </ul>
        </Container>
        <Container style={{height:'40%', textAlign:'center', position:'relative', top:'20px', color:'#FFF'}}>
          @ 2020 VetsGetHired.com. All rights reserved.
        </Container>
      </div>
    </React.Fragment >
  );
}
