import React from 'react'
import ReactDOM from "react-dom";
import  { Redirect } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import "./Signup.css";
import SignupTab from "./SignupTab"
import EmployerSignupVerification from "./EmployerSignupVerification"
import EmployerSignupConfirmation from "./EmployerSignupConfirmation"
import EmployerSignupConfirmationMessage from "./EmployerSignupConfirmationMessage"
export class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          businessName: "",
          businessResults:[],
          selectedBusinessName: "",
          isLoggedIn: false,
          view: "signupTab"
        };
    }

    changeViewState = (viewState) => {
      this.setState({view: viewState});
    }

    setBusinessResults = (businessResults) => {
      this.setState({businessResults: businessResults});
    }

    setIsLoggedIn = (isLoggedIn) => {
      this.setState({isLoggedIn: isLoggedIn})
    }

    setBusinessName = (businessName) => {
      this.setState({businessName: businessName});
    }

    renderBusinesses = () => {
      return  (<EmployerSignupConfirmation changeViewState = {this.changeViewState}
        businessResults={this.state.businessResults} />);
    }

    renderSearchBusinessForm = () => {
      return  (<EmployerSignupVerification setBusinessResults={this.setBusinessResults} setBusinessName={this.setBusinessName}
        changeViewState = {this.changeViewState} businessName={this.state.businessName} />);
    }

    render() {
      if (this.state.isLoggedIn) {
         return <Redirect to='/employerHome'  />
      }
      if (this.state.view == "signupTab") {
        return (<SignupTab changeViewState = {this.changeViewState} />);
      } else if (this.state.view == "employerSignupVerification") {
        return  (<EmployerSignupVerification setBusinessResults={this.setBusinessResults} setBusinessName={this.setBusinessName}
          changeViewState = {this.changeViewState} businessName={this.state.businessName} />);
      } else if (this.state.view == "employerSignupConfirmation") {
        return  (<EmployerSignupConfirmation changeViewState = {this.changeViewState}
          businessResults={this.state.businessResults} />);
      } else if (this.state.view == "employerSignupConfirmationMessage") {
        return  (<EmployerSignupConfirmationMessage setIsLoggedIn={this.setIsLoggedIn} changeViewState = {this.changeViewState} />);
      }

    }
}
export default Signup;
