
import React from 'react'
import {
  Link
} from "react-router-dom";
import ReactDOM from "react-dom";
import { Tab, Container, Button, Form, Segment, Dimmer, Loader} from 'semantic-ui-react'
import "./Signup.css";
import { properties } from '../common/properties.js';
import axios from 'axios';
export class EmployerSignupVerification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          businessName: props.businessName,
          loader:false
        };
        this.handleBusinessNameChange = this.handleBusinessNameChange.bind(this);
        this.showSamBusinesses = this.showSamBusinesses.bind(this);
    }
    handleBusinessNameChange(event) {
      this.setState({businessName: event.target.value});
      this.props.setBusinessName(event.target.value);
    }
    showSamBusinesses () {
      this.setState({loader:true})
      let samServiceUrl = properties.vcEmployerServiceEndpoint + 'searchSam/testsessionid?businessName=';
      samServiceUrl = samServiceUrl + this.state.businessName;
      axios.get(samServiceUrl)
        .then(function (response) {
            const businesResults = response.data;
            this.props.setBusinessResults(businesResults);
            this.props.changeViewState('employerSignupConfirmation');
            this.setState({loader:false})
        }.bind(this))
        .then(function (error) {
            console.log(error);
        }.bind(this));
    }

    render() {
      const { businessName } = this.state;
      const isContinueButtonEnabled = businessName.length > 0;

      return (<Segment><Dimmer active = {this.state.loader} inverted><Loader inverted>Loading</Loader></Dimmer><div id="signupLayout" className="signupLayout"><Container className="employerSignupVerification">

            <div className="verifcationNavBox">
              <div style={{display: 'inline-block'}}>
               <a style={{backgroundColor: '#28516A', color: '#FFF', fontSize:'20px'}} class="ui circular label">1</a>
              </div >
              <div style={{display: 'inline-block'}}>

              </div>
              <div style={{display: 'inline-block', float: 'right'}}>
               <a style={{color: '#FFF', fontSize:'20px'}} class="ui circular label">2</a>
              </div>
            </div>
            <Container style={{"text-align": 'center', "margin-top": "20px;", "font": "Regular 19px/24px Source Sans Pro", "letter-spacing": "0.18px", "color": "#1D272D;", "opacity": "1"}}>
              Let’s Get Started
            </Container>
            <Container style={{"text-align": 'center', "margin-top": "20px;", "font": "Regular 19px/24px Source Sans Pro", "letter-spacing": "0.18px", "color": "#1D272D;", "opacity": "1"}}>
              Let’s begin by verifying some basic information about your business
            </Container>
            <div className="verifcationInputBox">
            <Form style={{ padding: '24px' }}>
                <label style={{'margin-top': '50px', 'font-weight': 'bold'}}>What is the name of your business?</label>
                <Form.Group>
                    <Form.Input value={businessName} onChange={this.handleBusinessNameChange} placeholder={"Enter Business Name"} style={{"width": "100%",'margin-top': '20px',}}/>
                </Form.Group>
                <Button
                    style={{float: 'right', "background":"#28516A", "color":"#fff"}}
                    color="#28516A"
                    disabled={!isContinueButtonEnabled}
                    onClick={() => { this.showSamBusinesses() }}
                    title={'Continue'}>
                    {'Continue'}
                </Button>
            </Form>
            </div>
        </Container>
        </div>
      </Segment>);
    }
}

export default EmployerSignupVerification;
