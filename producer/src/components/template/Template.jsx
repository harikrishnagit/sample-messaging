import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import globalStyles from "../../assets/global-styles/bootstrap.module.css";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import "./Template.module.scss";


class Template extends Component {
  render() {
    return (
      <div className="templateLayout">
        <Router>
          <Header />
          <Body />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default Template;
