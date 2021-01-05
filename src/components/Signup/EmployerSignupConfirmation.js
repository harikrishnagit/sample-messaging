
import React from 'react'
import {
  Link
} from "react-router-dom";
import ReactDOM from "react-dom";
import {Container, Button, Form, Segment, Radio } from 'semantic-ui-react'
import "./Signup.css";
export class EmployerSignupConfirmation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          businessResults: props.businessResults,
        };
    }
    handleChange = (e, { value }) => this.setState({ value })
    render() {
      const isConfirmButtonEnabled = (this.state.value !=null && this.state.value.length > 0);
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
          <div className="signupConfiramtionBox">

            <Container style={{"text-align": 'center', "margin-top": "20px;", "font": "Regular 16px/20px Source Sans Pro", "letter-spacing": "0.15px", "color": "#1D272D;", "opacity": "1"}}>
                Here’s what we found
            </Container>
            {this.state.businessResults ? (
              <Segment className="samBusinessListBox">
                <Form>
                {this.state.businessResults.map((el, i) => (
                  <div key={el.legalBusinessName}>
                    <Container style={{border: '1px solid #28516A', marginBottom:'10px'}}>
                      <Container style={{backgroundColor: '#28516A', height:'30px', paddingTop:'4px', paddingLeft:'10px', color:'#FFFFFF'}}>
                        {el.legalBusinessName}
                      </Container>
                      <Container style={{backgroundColor: '#FFFFFF', height:'100px'}}>
                        <table  width="100%">
                          <tr><td width="20%" valign="top">DUNS : </td>
                              <td width="60%" valign="top"  style={{fontWeight: 'bold'}}>{el.duns}</td>
                                <td width="20%" valign="top"></td></tr>
                          <tr><td width="20%"  valign="top" >DUNS 4 : </td>
                              <td width="60%" valign="top"  style={{fontWeight: 'bold'}}>{el.dunsPlus4}</td>
                              <td width="20%" valign="top" style={{textAlign: 'center'}}>
                              <Radio checked={this.state.value === el.legalBusinessName}
                                  value = {el.legalBusinessName}
                                  onChange={this.handleChange}
                                  name='radioGroup' radio/></td></tr>
                          <tr><td width="20%" valign="top">Address : </td>
                              <td width="70%" valign="top"  style={{fontWeight: 'bold'}}>
                                {el.addressLine1}, {el.city}, {el.city}, {el.stateOrProvince}, {el.countryCode}, {el.zip}</td>
                              <td width="10%" valign="top">
                              </td></tr>
                        </table>
                      </Container>
                    </Container>
                  </div>
                ))}
                </Form>
              </Segment>) : ''}
              <Button
                  labelPosition='left'
                  style={{"background":"#28516A", "color":"#fff"}}
                  icon='left chevron'
                  onClick={() => {
                      this.props.changeViewState('employerSignupVerification');
                  }}
                  content='Back' />
              <Button
                  style={{float: 'right', "background":"#28516A", "color":"#fff"}}
                  color="#28516A"
                  disabled={!isConfirmButtonEnabled}
                  onClick={() => {
                      alert(this.state.value);
                      this.props.changeViewState('employerSignupConfirmationMessage');
                  }}
                  title={'Confirm'}>
                  {'Confirm'}
              </Button>

          </div>

      </Container></div>);
    }
}

export default EmployerSignupConfirmation;
