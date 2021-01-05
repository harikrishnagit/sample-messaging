
import React from 'react'
import ReactDOM from "react-dom";
import {Container, Button} from 'semantic-ui-react'
import "./Signup.css";
export class EmployerSignupConfirmationMessage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
      return ( <div id="signupLayout" className="signupLayout"><Container className="employerSigiupConfirmation">
          <div className="verifcationNavBox">
            <div style={{display: 'inline-block'}}>
             <a style={{color: '#FFF', fontSize:'20px'}} class="ui circular label">1</a>
            </div >
            <div style={{display: 'inline-block'}}>

            </div>
            <div style={{display: 'inline-block', float: 'right'}}>
             <a style={{backgroundColor: '#28516A', color: '#FFF' , fontSize:'20px'}} class="ui circular label">2</a>
            </div>
          </div>
          <Container style={{"text-align": 'center', "margin-top": "20px;", "font": "Regular 19px/24px Source Sans Pro", "letter-spacing": "0.18px", "color": "#1D272D;", "opacity": "1"}}>
            Let’s Get Started
          </Container>
          <Container style={{"text-align": 'center', "margin-top": "20px;", "font": "Regular 19px/24px Source Sans Pro", "letter-spacing": "0.18px", "color": "#1D272D;", "opacity": "1"}}>
            Let’s begin by verifying some basic information about your business
          </Container>
          <div className="signupConfiramtionMessageBox">
          <div>
              <Container style={{"text-align": 'center', position:'relative', "top": "20px;", "font": "Semibold 18px/23px Source Sans Pro", textTransform: 'uppercase',"letter-spacing": "0.18px", "color": "#1D272D;", "opacity": "1"}}>
                Confirmation Pending…
              </Container>
              <Container style={{"text-align": 'center', "margin-top": "20px;", "font": "Regular 19px/24px Source Sans Pro", "letter-spacing": "0.18px", "color": "#1D272D;", "opacity": "1"}}>
                <b>Thank you for confirming your business information. We’re in the process of verifying your information.</b> Is estimated to take between 1-2 business days. You won’t be able to post any job until we have verified all the information.
              </Container>
                <Button
                    style={{"background":"#28516A", "color":"#fff", "margin-top": "20px;", display:'block', margin:'auto'}}
                    color="#28516A"
                    onClick={() => {
                        this.props.setIsLoggedIn(true);
                    }}
                    title={'Continue'}>
                    {'Continue'}
                </Button>
              </div>
          </div>
      </Container></div>);
    }
}

export default EmployerSignupConfirmationMessage;
