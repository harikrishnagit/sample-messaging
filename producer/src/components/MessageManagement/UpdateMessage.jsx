import React from "react";

import {
  Button,
  Form,
  TextArea,
  Input,
  Header,
  Container
} from "semantic-ui-react";

export class UpdateMessage extends React.Component {
  // handleChange = (e, { name, value }) => this.setState({ [name]: value })

  // discarChanges = () => this.setState({ email: '', name: '' })

  render() {
    return (
      <React.Fragment>
        <Container style={{ paddingBottom: "4em" }}>
          <Header as="h4" style={{ padding: "0.5em 0em" }}>
            Instructions: Fill in the desired fields and
            select Save Changes.
          </Header>
          <Form style={{ padding: "0.75em 3em 0em 0em" }}>
            <Form.Group>
              <Form.Input
                label="Message Title"
                placeholder="Message Title"
                width={6}
                onChange={this.handleChange}
                type="text"
                name="messageTitle"
                id="messageTitle"
              //   value={this.state.inputFields.messageTitle}
              />
              <Form.TextArea
                width={14}
                label="Message"
                name="message"
                id="message"
              />
            </Form.Group>

            <Header as="h5" style={{ paddingTop: "0.5em" }}>
              Message
            </Header>

            <div style={{ paddingLeft: "0.75em" }}>
              <Form.Group>
                <Form.Input
                  label="Mailing Address Line 1"
                  width={8}
                  onChange={this.handleChange}
                  type="text"
                  name="mailingAddressLine_1"
                  id="mailingAddressLine_1"
                />
              </Form.Group>
              <Form.Group>
                <Form.Input
                  label="Mailing Address Line 2 (optional)"
                  width={8}
                  onChange={this.handleChange}
                  type="text"
                  name="mailingAddressLine_1"
                  id="mailingAddressLine_1"
                />
                <Form.TextArea
                  width={14}
                  label="Comments"
                  name="comments"
                  id="comments"
                />
              </Form.Group>
            </div>

            {/* PHONE NUMBER EXTENSION FAX */}
            <Form.Group style={{ paddingTop: "1em" }}>
              <Form.Input
                label="Phone Number"
                placeholder="Phone Number"
                width={4}
                onChange={this.handleChange}
                type="text"
                name="phoneNumber"
                id="phoneNumber"
              />
              <Form.Input
                label="Extension"
                placeholder="Extension"
                width={3}
                onChange={this.handleChange}
                type="text"
                name="extension"
                id="extension"
              />
              <Form.Input
                label="Fax (Optional)"
                placeholder="Fax"
                width={4}
                onChange={this.handleChange}
                type="text"
                name="fax"
                id="fax"
              />
            </Form.Group>

            <div style={{ width: "87%" }}>
              <Form.Group style={{ paddingTop: "3em", float: "right" }}>
                <Button compact color="red">
                  Discard Changes
                </Button>
                <Button compact color="primary">
                  Save Changes
                </Button>
              </Form.Group>
            </div>
          </Form>
        </Container>
      </React.Fragment>
    );
  }
}

export default UpdateMessage;
