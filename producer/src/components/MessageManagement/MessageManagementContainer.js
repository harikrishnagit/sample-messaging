import React from 'react';
import CommonModal from '../common/modal/CommonModal'
import OIPTable from '../common/tables/OIPTable'
import OIPCard from '../common/cards/OIPCard'
import { Button, Form, TextArea, Input, Icon, Radio, Header, Container, Message } from 'semantic-ui-react';
import _ from 'lodash';
import axios from 'axios';
import { any } from 'prop-types';

export class MessageManagementContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openSearchModal: false,
            openUpdateModal: false,
            showTextBox: false,
            successToastVisible: false,
            chosenCardIndex: 0,
            userData: any,
            data: [
                {
                    user: "Kennedy, John (jkennedy)",
                    fullname: {
                        firstname: "John",
                        middlename: "F",
                        lastname: "Kennedy"
                    },
                    email: "jfk@gmail.com",
                    phoneNumber: "(111)-222-3333#1235"
                },
                {
                    user: "Wilson, Woody",
                    fullname: {
                        firstname: "Woodrow",
                        lastname: "Willson"
                    },
                    email: "woody@gmail.com",
                    phoneNumber: "(222)-555-3333"
                }
            ]
        }
    }
    handleSort = clickedColumn => () => {
        const { column, data, direction } = this.state;

        if (column !== clickedColumn) {
            this.setState({
                column: clickedColumn,
                data: _.sortBy(data, [clickedColumn]),
                direction: "ascending"
            });

            return;
        }

        this.setState({
            data: data.reverse(),
            direction: direction === "ascending" ? "descending" : "ascending"
        });
    };
    handleChange = (path, value) => {
        var clonedState = { ...this.state };
        _.set(clonedState, path, value);
        this.setState({ ...clonedState });
    };

    toggleModal = (openModal) => {
        let currentState = this.state[openModal];
        console.log(JSON.stringify(openModal));
        this.setState({ [openModal]: !currentState });
    }
    toggleUpdateModal = (index) => {
        this.setState({
            chosenCardIndex: index,
            openUpdateModal: !this.state.openUpdateModal
        });
    }
    hideTextBox = () => {
        this.setState({ showTextBox: false })
    }
    showTextBox = () => {
        this.setState({ showTextBox: true })
    }
    handleSubmit = () => {
        console.log(JSON.stringify(this.state));

    }
    onSendMessage = () => {
        let { data } = this.state;
        let userData = data[0];
        console.log(userData);
        const NATS = require('nats')
        let thisurl = 'nats://127.0.0.1:4222';
        let nc = NATS.connect({ url: thisurl, name: "LocalNats" });
        nc.on('connect', (c) => {
            // Simple Publisher
            nc.publish('sample-messaging', userData);
            console.log('Published: ' + userData);
            console.log(c);
            // Close connection
            nc.close()
        });
        nc.on('error', (err) => {
            console.log(err);
        })

        // location: 'http://localhost:10005/PostMessageQueue'
        // axios({
        //     url: location,
        //     method: "POST",
        //     data: userData,
        // }).then(response => {
        //     console.log(JSON.stringify(response.data));
        // }).catch(err => {
        //     console.log(JSON.stringify(err));
        // });
    }
    render() {
        return (
            <React.Fragment>
                {this.state.successToastVisible ?
                    <Message color='green'>
                        <Icon className='check circle outline' />
                'User Successfully Updated'
                <Icon
                            className="cancel"
                            style={{ float: 'right' }}
                            onClick={() => { this.setState({ successToastVisible: false }) }}
                        />
                    </Message> : false}
                <Container style={{ padding: '24px', border: '2px', borderRadius: '5px', backgroundColor: '#f8f9fa' }}>
                    <Header as='h1' style={{ padding: '0.5em 0em' }}>Send/Update user Information
                    <Header.Subheader style={{ paddingTop: '0.25em' }}>
                            <i>Use the Send button to Send your information. At least one field must be filled to complete this action.</i>
                        </Header.Subheader>
                    </Header>
                    <Form
                        style={{ padding: '24px', border: '2px solid #6c757d', borderRadius: '5px' }}>
                        <Form.Input label='User Name' placeholder='User Name' onChange={e => this.handleChange("userData.username", e.target.value)}
                            width={4} />
                        <Form.Group>
                            <Form.Input label='First Name' placeholder='First Name' onChange={e => this.handleChange("userData.firstname", e.target.value)} width={6} />
                            <Form.Input name='middlename' label='Middle Name' placeholder='Middle Name' width={4} onChange={e => this.handleChange("userData.middlename", e.target.value)} />
                            <Form.Input name='lastname' label='Last Name' onChange={e => this.handleChange("userData.lastname", e.target.value)} placeholder='Last Name' width={6} />
                        </Form.Group>
                        <Form.Input name='email' label='Email' placeholder='example@email.com' width={6} onChange={e => this.handleChange("userData.email", e.target.value)} />
                        <Form.Input onChange={e => this.handleChange("userData.phonenumber", e.target.value)} label='Phone Number' placeholder='+X(XXX)-XXX-XXXX' width={6} />
                        <Button
                            color="blue"
                            title={'Send Message'}
                            onClick={() => { console.log("Hari"); this.onSendMessage() }}>
                            <Icon name='upload' />{'Send'}
                        </Button>
                    </Form>
                    <br />
                    {this.state.data ? (
                        <div>
                            <OIPTable
                                scrollable={100}
                                celled={false}
                                basic={false}
                                columns={5}
                            >
                                <OIPTable.Header>
                                    <OIPTable.HeaderCell
                                        width='20%'
                                        sorted={this.state.column === "user" ? this.state.direction : null}
                                        onClick={this.handleSort("user")}
                                    >UserName</OIPTable.HeaderCell>
                                    <OIPTable.HeaderCell width='20%'>Full Name</OIPTable.HeaderCell>
                                    <OIPTable.HeaderCell
                                        width='20%'
                                        sorted={this.state.column === "active" ? this.state.direction : null}
                                        onClick={this.handleSort("active")}
                                    >Email</OIPTable.HeaderCell>
                                    <OIPTable.HeaderCell
                                        width='20%'
                                        sorted={this.state.column === "active" ? this.state.direction : null}
                                        onClick={this.handleSort("active")}
                                    >Phone</OIPTable.HeaderCell>
                                </OIPTable.Header>
                            </OIPTable>
                            {_.map(this.state.data, (userData, index) => {
                                let cardData = (({ user, fullname, email, phoneNumber }) =>
                                ({
                                    user, fullname, email, phoneNumber,
                                }))(userData);
                                return (<OIPCard data={cardData}>
                                    {/* <Button icon="ellipsis horizontal" onClick={()=>{this.toggleUpdateModal(index)}}></Button> */}
                                </OIPCard>)
                            })}

                        </div>
                    ) : ''}
                </Container>
            </React.Fragment>
        );
    }
}


export default MessageManagementContainer;