import React from 'react';
import CommonModal from '../common/modal/CommonModal'
import OIPTable from '../common/tables/OIPTable'
import OIPCard from '../common/cards/OIPCard'
import { Button, Form, TextArea, Input, Icon, Radio, Header, Container, Message } from 'semantic-ui-react';
import _ from 'lodash';

export class UserManagementContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openSearchModal: false,
            openUpdateModal: false,
            showTextBox: false,
            successToastVisible: false,
            chosenCardIndex: 0,
            data: [
                {
                    user: "Smith, James (jsmith)",
                    contactInfo: {
                        phoneNumber: "(111)-222-3333#1234",
                        email: "jsmith@fci.com"
                    },
                    roles: [`SUBMISSIONS\n Proposal Submitter`],
                    active: "Yes",
                    // editModal: (index)=>{this.toggleUpdateModal(index)},
                    companyInfo: {
                        title: "Wayne Enterprises",
                        address: {
                            street: "1111 Road St.",
                            city: "Gotham City",
                            state: "Michigan"
                        }
                    }
                },
                {
                    user: "Tully, Xander (txander)",
                    contactInfo: {
                        phoneNumber: "(111)-222-3333#1235",
                        email: "txander@fci.com"
                    },
                    roles: [`SUBMISSIONS\n Proposal Submitter`],
                    active: "No",
                    // editModal: this.toggleUpdateModal
                    companyInfo: {
                        title: "Stark Industries",
                        address: {
                            street: "2222 Road St.",
                            city: "Arkham",
                            state: "Virginia"
                        }
                    }
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
    toggleModal = (openModal) => {
        let currentState = this.state[openModal];
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
    renderUpdateModal = () => {
        let { data, chosenCardIndex, openUpdateModal } = this.state;
        let companyInfo = data[chosenCardIndex].companyInfo;
        let userData = data[chosenCardIndex];
        let [lastname, name] = _.split(userData.user, ",");
        let [firstname] = _.split(name, "(");
        let [phoneNumber, ext] = _.split(userData.contactInfo.phoneNumber, "#");
        return (
            <CommonModal
                open={openUpdateModal}
                title="Update/Edit user"
                size="large"
                cancelAction={this.toggleUpdateModal}
                confirmAction={() => {
                    this.toggleUpdateModal()
                    this.setState({ successToastVisible: true })
                }}
                clearButtonText="Clear Changes"
                confirmButtonText="Save Changes"
            >
                <Form
                    style={{ padding: '24px' }}>
                    <Form.Group>
                        <Form.Input label='First Name'
                            value={userData.firstname ? userData.firstname : firstname}
                            placeholder={firstname}
                            width={6}
                            onChange={e => {
                                userData.firstname = e.target.value;
                                this.setState({ data })
                            }} />
                        <Form.Input label='Middle Name'
                            placeholder='Middle Name'
                            width={4}
                            value={userData.middlename ? userData.middlename : ""}
                            onChange={e => {
                                userData.middlename = e.target.value;
                                this.setState({ data });
                            }} />
                        <Form.Input label='Last Name'
                            value={userData.lastname ? userData.lastname : lastname}
                            placeholder={lastname}
                            width={6}
                            onChange={e => {
                                userData.lastname = e.target.value;
                                this.setState({ data })
                            }} />
                        <Form.Input label='Title' placeholder='(Optional)' width={6}
                            value={userData.title ? userData.title : ''}
                            onChange={e => {
                                userData.title = e.target.value;
                                this.setState({ data });
                            }} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input label='Phone Number'
                            placeholder='+X(XXX)-XXX-XXXX'
                            width={4}
                            value={userData.contactInfo.phoneNumber ? phoneNumber : phoneNumber}
                            onChange={e => {
                                userData.contactInfo.phoneNumber = e.target.value;
                                this.setState({ data })
                            }} />
                        <Form.Input label='Extension'
                            placeholder='XXXX'
                            width={4}
                            value={userData.contactInfo.ext ? userData.contactInfo.ext : ext}
                            onChange={e => {
                                userData.contactInfo.ext = e.target.value;
                                this.setState({ data });
                            }} />
                        <Form.Input label='Fax'
                            placeholder='(Optional)'
                            width={4}
                            value={userData.contactInfo.fax ? userData.contactInfo.fax : ''}
                            onChange={e => {
                                userData.contactInfo.fax = e.target.value;
                                this.setState({ data })
                            }} />
                    </Form.Group>
                    <Form.Input label='Email'
                        placeholder='example@email.com'
                        width={6}
                        value={userData.contactInfo.email ? userData.contactInfo.email : "test@test.com"}
                        onChange={e => {
                            userData.contactInfo.email = e.target.value;
                            this.setState({ data })
                        }} />
                    {companyInfo &&
                        <div>
                            <Form.Field style={{ marginBottom: '0px' }} content={<strong>{companyInfo.title}</strong>}></Form.Field>
                            <Form.Field style={{ marginBottom: '0px' }} content={companyInfo.address.street}></Form.Field>
                            <Form.Field style={{ marginBottom: '0px' }} content={companyInfo.address.city}></Form.Field>
                            <Form.Field style={{ marginBottom: '10px' }} content={companyInfo.address.state}></Form.Field>
                        </div>
                    }
                    <Form.Group grouped>
                        <label>Email User</label>
                        <Form.Field
                            label='No'
                            control='input'
                            type='radio'
                            name='userType'
                            onChange={this.hideTextBox}
                        />
                        <Form.Field
                            label='Yes, notify of changes made'
                            control='input'
                            type='radio'
                            name='userType'
                            onChange={this.showTextBox}
                        />
                        <Form.Field
                            label='Yes, notify of changes made and send new password'
                            control='input'
                            type='radio'
                            name='userType'
                            onChange={this.showTextBox}
                        />
                    </Form.Group>
                    <Form.Checkbox label='Deactivate User' style={{ fontWeight: 'bold' }} />
                    <Form.Checkbox label='User has signed Rules of Behavior (RoB)' style={{ fontWeight: 'bold' }} />

                </Form>
            </CommonModal>
        )
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
                    <Header as='h1' style={{ padding: '0.5em 0em' }}>Search/Update user Information
                    <Header.Subheader style={{ paddingTop: '0.25em' }}>
                            <i>Use the search button to search for users. At least one field must be filled to complete this action.</i>
                        </Header.Subheader>
                    </Header>
                    <Form
                        style={{ padding: '24px', border: '2px solid #6c757d', borderRadius: '5px' }}>
                        <Form.Input label='User Name' placeholder='User Name' width={4} />
                        <Form.Group>
                            <Form.Input label='First Name' placeholder='First Name' width={6} />
                            <Form.Input label='Middle Name' placeholder='Middle Name' width={4} />
                            <Form.Input label='Last Name' placeholder='Last Name' width={6} />
                        </Form.Group>
                        <Form.Input label='Email' placeholder='example@email.com' width={6} />
                        <Form.Input label='Phone Number' placeholder='+X(XXX)-XXX-XXXX' width={6} />
                        <Form.Group grouped>
                            <label>User Type</label>
                            <Form.Field
                                label='Program Portal user'
                                control='input'
                                type='radio'
                                name='userType'
                                onChange={this.hideTextBox}
                            />
                            <Form.Field
                                label='Public Portal user'
                                control='input'
                                type='radio'
                                name='userType'
                                onChange={this.showTextBox}
                            />
                            {this.state.showTextBox ?
                                <Form.Input label='Company' placeholder='Company name' width={6} />
                                : ''}
                        </Form.Group>
                        <Button
                            color="blue"
                            title={'Search User'}
                            onClick={() => { this.toggleModal("openSearchModal") }}
                        >
                            <Icon name='search' />{'Search'}
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
                                    >User</OIPTable.HeaderCell>
                                    <OIPTable.HeaderCell width='20%'>Contact Information</OIPTable.HeaderCell>
                                    <OIPTable.HeaderCell
                                        width='20%'
                                        sorted={this.state.column === "roles" ? this.state.direction : null}
                                        onClick={this.handleSort("roles")}>All Assigned Roles</OIPTable.HeaderCell>
                                    <OIPTable.HeaderCell
                                        width='20%'
                                        sorted={this.state.column === "active" ? this.state.direction : null}
                                        onClick={this.handleSort("active")}
                                    >Active</OIPTable.HeaderCell>
                                    <OIPTable.HeaderCell width='20%'>Edit</OIPTable.HeaderCell>
                                </OIPTable.Header>
                            </OIPTable>
                            {_.map(this.state.data, (userData, index) => {
                                let cardData = (({ user, contactInfo, roles, active, editModal }) =>
                                    ({
                                        user, contactInfo, roles, active,
                                        editModal: {
                                            icon: 'ellipsis horizontal',
                                            fn: () => {
                                                this.setState({
                                                    chosenCardIndex: index,
                                                    openUpdateModal: !this.state.openUpdateModal
                                                })
                                            }
                                        }
                                    }))(userData);
                                return (<OIPCard data={cardData}>
                                    {/* <Button icon="ellipsis horizontal" onClick={()=>{this.toggleUpdateModal(index)}}></Button> */}
                                </OIPCard>)
                            })}
                            {this.state.data && (typeof this.state.chosenCardIndex === 'number') ? this.renderUpdateModal() : ''}
                        </div>
                    ) : ''}
                </Container>
            </React.Fragment>
        );
    }
}


export default UserManagementContainer;