
import React from 'react'
import {
  Link
} from "react-router-dom";
import ReactDOM from "react-dom";
import { Tab, Container, Button, Form} from 'semantic-ui-react'
import "./Signup.css";
export class SignupTab extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
      const panes = [
        {
          menuItem: 'Job Seeker',
          render: () => <Tab.Pane attached={true}></Tab.Pane>,
        },
        {
          menuItem: 'Employer',
          render: () => <Tab.Pane attached={true}>
                          <Container style={{"text-align": 'center' }}> Register </Container>
                          <Container style={{"text-align": "center", "margin-top": "10px", "font": "Regular 14px/18px Source Sans Pro", "letter-spacing": 0, "color": "#6A6A6A", "opacity": 1 }}>
                            Hire high-quality veteran talent, faster. Sign up to get started.
                          </Container>
                          <Container style={{"text-align": "center", "margin-top": "10px", "font": "Regular 16px/20px Source Sans Pro", "letter-spacing": 0, "color": "#1D272D", "opacity": 1 }}>
                            Already have a VetsGetHired account
                          </Container>
                          <Container style={{"text-align": 'center', "margin-top": "10px"}}>
                            <Link style={{"text-align": "center"}} className="nav-link" to="/login">Click here to sign in</Link>
                          </Container>

                          <Container style={{ padding: '15px' }}>
                            <Form style={{ padding: '24px' }}>
                                <Form.Group>
                                    <Form.Input error={true} placeholder={"First Name"} style={{"width": "100%"}} />
                                    <Form.Input placeholder={"Last Name"} style={{"width": "100%"}} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Input placeholder={"Work Email"} style={{"width": "100%"}}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Input type="password" placeholder={"Password"} style={{"width": "100%"}}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Input type="password" placeholder={"Confirm Password"} style={{"width": "100%"}}/>
                                </Form.Group>
                                <Button
                                    style={{float: 'right',"background":"#28516A", "color":"#fff"}}
                                    color="#28516A"
                                    onClick={() => {
                                        this.props.changeViewState('employerSignupVerification');
                                    }}
                                    title={'Register'}>
                                    {'Register'}
                                </Button>
                            </Form>
                          </Container>
                        </Tab.Pane>,
        },
        {
          menuItem: 'Advocate',
          render: () => <Tab.Pane attached={true}></Tab.Pane>,
        },
      ]
      return (
        <div id="signupLayout" className="signupLayout">
          <div  className="signupTabLayout">
            <Tab menu={{ secondary: true, pointing: true , style: { display: "flex", justifyContent: "center" }}} panes={panes} />
          </div>
        </div>
      );
    }
}

export default SignupTab;
