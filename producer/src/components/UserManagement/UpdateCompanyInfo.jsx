import React from "react";

import {
  Button,
  Form,
  TextArea,
  Input,
  Header,
  Container
} from "semantic-ui-react";

export class UpdateCompanyInfo extends React.Component {
  // handleChange = (e, { name, value }) => this.setState({ [name]: value })

  // discarChanges = () => this.setState({ email: '', name: '' })

  render() {
    return (
      <React.Fragment>
        <Container style={{ paddingBottom: "4em" }}>
          <Header as="h4" style={{ padding: "0.5em 0em" }}>
            Instructions: To company information, fill in the desired fields and
            select Save Changes.
          </Header>
          <Form style={{ padding: "0.75em 3em 0em 0em" }}>
            <Form.Group>
              <Form.Input
                label="Company Name"
                placeholder="Company Name"
                width={6}
                onChange={this.handleChange}
                type="text"
                name="companyName"
                id="companyName"
                //   value={this.state.inputFields.companyName}
              />
              <Form.Input
                label="Company TIN"
                placeholder="Company TIN"
                width={4}
                onChange={this.handleChange}
                type="text"
                name="companyTin"
                id="companyTin"
                //   value={this.state.inputFields.companyName}
              />
              <Form.Input
                label="Confirm Company TIN"
                placeholder="Confirm Company TIN"
                width={4}
                onChange={this.handleChange}
                type="text"
                name="confirmCompanyTin"
                id="confirmCompanyTin"
                //   value={this.state.inputFields.companyName}
              />
            </Form.Group>

            <Header as="h5" style={{ paddingTop: "0.5em" }}>
              Address
            </Header>

            <div style={{ paddingLeft: "0.75em" }}>
              {/* MAILING ADDRESS 1 & 2 */}
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
              </Form.Group>

              {/* CITY STATE ZIP COUNTRY */}
              <Form.Group>
                <Form.Input
                  label="City"
                  placeholder="City"
                  width={4}
                  onChange={this.handleChange}
                  type="text"
                  name="city"
                  id="city"
                />
                <Form.Input
                  label="State"
                  placeholder="State"
                  width={3}
                  onChange={this.handleChange}
                  type="text"
                  name="state"
                  id="state"
                />
                <Form.Input
                  label="Zip"
                  placeholder="Zip"
                  width={3}
                  onChange={this.handleChange}
                  type="text"
                  name="zip"
                  id="zip"
                />
                <Form.Input
                  label="Country"
                  placeholder="Country"
                  width={4}
                  onChange={this.handleChange}
                  type="text"
                  name="country"
                  id="country"
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

            {/* CEO EMAIL COMPANY URL */}
            <Form.Group style={{ paddingTop: "0.75em" }}>
              <Form.Input
                label="CEO Email"
                width={4}
                onChange={this.handleChange}
                type="text"
                name="ceoEmail"
                id="ceoEmail"
              />
              <Form.Input
                label="Company URL (Optional)"
                width={6}
                onChange={this.handleChange}
                type="text"
                name="companyUrl"
                id="companyUrl"
              />
            </Form.Group>

            {/* DUNS CAGE SIC FICE */}
            <Form.Group>
              <Form.Input
                label="DUNS + 4 (Optional)"
                width={3}
                onChange={this.handleChange}
                type="text"
                name="duns"
                id="duns"
              />
              <Form.Input
                style={{ marginTop: "1.41412em" }}
                label=""
                width={1}
                onChange={this.handleChange}
                type="text"
                name="dunsExt"
                id="dunsExt"
              />
              <Form.Input
                label="CAGE Code (Optional)"
                width={3}
                onChange={this.handleChange}
                type="text"
                name="cageCode"
                id="cageCode"
              />
              <Form.Input
                label="SIC (Optional)"
                width={3}
                onChange={this.handleChange}
                type="text"
                name="sic"
                id="sic"
              />
              <Form.Input
                label="FICE (Optional)"
                width={3}
                onChange={this.handleChange}
                type="text"
                name="fice"
                id="fice"
              />
            </Form.Group>

            <Header as="h5" style={{ paddingTop: "0.5em" }}>
              Company POC
            </Header>

            {/* COMPANY POC */}
            <div style={{ paddingLeft: "0.75em" }}>
              <Form.Group>
                <Form.Input
                  label="Salutation"
                  width={2}
                  onChange={this.handleChange}
                  type="text"
                  name="salutation"
                  id="salutation"
                />
                <Form.Input
                  label="First Name"
                  width={3}
                  onChange={this.handleChange}
                  type="text"
                  name="firstName"
                  id="firstName"
                />
                <Form.Input
                  label="Middle Name (Optional)"
                  width={3}
                  onChange={this.handleChange}
                  type="text"
                  name="middleName"
                  id="middleName"
                />
                <Form.Input
                  label="Last Name"
                  width={3}
                  onChange={this.handleChange}
                  type="text"
                  name="lastName"
                  id="lastName"
                />
                <Form.Input
                  label="Title"
                  width={3}
                  onChange={this.handleChange}
                  type="text"
                  name="title"
                  id="title"
                />
              </Form.Group>

              <Form.Group>
                <Form.Input
                  label="Phone Number"
                  width={4}
                  onChange={this.handleChange}
                  type="text"
                  name="pocPhoneNumber"
                  id="pocPhoneNumber"
                />
                <Form.Input
                  label="Extension"
                  width={2}
                  onChange={this.handleChange}
                  type="text"
                  name="pocExtension"
                  id="pocExtension"
                />
                <Form.Input
                  label="POC Email"
                  width={4}
                  onChange={this.handleChange}
                  type="text"
                  name="pocEmail"
                  id="pocEmail"
                />
                <Form.Input
                  label="POC Fax (Optional)"
                  width={4}
                  onChange={this.handleChange}
                  type="text"
                  name="pocFax"
                  id="pocFax"
                />
              </Form.Group>
            </div>

            <Header as="h5" style={{ paddingTop: "0.5em" }}>
              S&T Date
            </Header>
            {/* S&T Date */}
            <div style={{ paddingLeft: "0.75em" }}>
              <Form.Group>
                <Form.Input
                  label="Banned Date (Add date to ban and remove date to un-ban)"
                  width={6}
                  onChange={this.handleChange}
                  type="date"
                  name="salutation"
                  id="salutation"
                />
              </Form.Group>

              <Form.TextArea
                width={14}
                label="Comments"
                name="comments"
                id="comments"
              />
            </div>

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

export default UpdateCompanyInfo;
