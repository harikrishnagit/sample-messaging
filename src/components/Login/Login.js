import React, { Component } from 'react';
import CommonModal from '../common/modal/CommonModal';

import { Button, Form, Icon, Header, Container, Message } from 'semantic-ui-react';
import { post } from "axios";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           username: '',
           password: '',
           error: '',
           data: [
               {
                 username: "user1@gmail.com",
                 password: "user1pass"
               },
               {
                 username: "user2@gmail.com",
                 password: "user2pass"
               },
               {
                 username: "user3@gmail.com",
                 password: "user3pass"
               },
               {
                 username: "user4@gmail.com",
                 password: "user4pass"
               },
             ]
       };
    }

     handleUserChange = user => () => {
       this.setState({ username: user});
     };
     handlePassChange = pass => () => {
       this.setState({ password: pass});
     };
     render() {
          return (
              <React.Fragment>
              <Form style={{ 'padding': '24px', 'border': '2px solid #6c757d', 'borderRadius': '5px' }}>
                <label>User Name</label>
                  <Form.Field
                      control='input'
                      type='text'
                      name='username'
                      onChange={this.handleUserChange}
                  />
                  <label>Password</label>
                  <Form.Field
                       control='input'
                       type='password'
                       name='password'
                       onChange={this.handlePassChange}
                   />
                   <Button
                  color="blue"
                  title={'Submit'}
                //  onClick={() => { this.handleSubmit }}
                >
                </Button>
              </Form>
              </React.Fragment>
          );
    };
}
export default Login;
