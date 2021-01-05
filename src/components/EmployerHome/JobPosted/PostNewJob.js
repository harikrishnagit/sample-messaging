import React from 'react'
import ReactDOM from "react-dom";
import {
  Link
} from "react-router-dom";
import {Container, Button, Form, Segment, Dimmer, Loader, Grid, Modal, Header, Image,
Divider, Checkbox, TextArea, Dropdown} from 'semantic-ui-react'
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import "./JobPosted.css";
import axios from 'axios';
import _ from 'lodash';
import JobCard from "../../common/cards/JobCard"
export class PostNewJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
      const educationQualifications = [
          {
            key: 'btech',
            text: 'Btech',
            value: 'btech',
          }, {
            key: 'mtech',
            text: 'Mtech',
            value: 'mtech',
          }]
      return (<div className="post-new-job">
        <Form style={{ padding: '24px' }}>
            <label className="form-content-heading">Job Overview</label>
            <Divider style={{marginTop:'5px', marginBottom:'5px'}} fitted />
            <Form.Field style={{marginTop:'25px'}} required>
              <label>Job Title</label>
              <Form.Input required placeholder='Type a Job title' />
            </Form.Field>
            <Form.Group style={{marginTop:'25px'}}>
                 <Form.Input label='Job Location' placeholder='Type in work location' width={11} required/>
                 <Checkbox toggle width={6} label="Can work remote?" style={{marginTop:'35px', float:'right'}}/>
            </Form.Group>
            <Form.Field style={{marginTop:'25px'}}>
              <label>Employer Overview (Optional)</label>
              <TextArea placeholder='About Us' style={{ minHeight: 100 }} />
            </Form.Field>
            <Form.Field style={{marginTop:'25px'}} required>
              <label>Industry</label>
              <Form.Input placeholder='Select Industry' />
            </Form.Field>
            <Form.Field required style={{marginTop:'25px'}}>
                <label>Employment Type:</label>
            </Form.Field>
            <Form.Group >
              <Form.Radio
                label='Full Time'
                name='employmentType'
                value='fullTime'
              />
              <Form.Radio
                label='Part Time'
                name='employmentType'
                value='partTime'
              />
            </Form.Group>
            <Form.Field style={{marginTop:'25px'}}>
                <label>Job Agreement: (Optional)</label>
            </Form.Field>
            <Form.Group >
              <Form.Radio
                label='Contract-to-hire'
                name='jobAgreementType'
                value='contractToHire'
              />
              <Form.Radio
                label='Contract'
                name='jobAgreementTypeContract'
                value='contract'
              />
              <Form.Radio
                label='Internship'
                name='jobAgreementType'
                value='internship'
              />
            </Form.Group>
            <label className="form-content-heading" style={{marginTop:'25px'}}>Competency Related Information</label>
            <Divider style={{marginTop:'5px', marginBottom:'5px'}} fitted />
            <Form.Field style={{marginTop:'25px'}} required>
              <label>Job Description</label>
              <TextArea placeholder='Job Responsibilities' style={{ minHeight: 100 }} />
            </Form.Field>
            <Form.Field style={{marginTop:'25px'}}>
              <label>Skells needed for this job (Optional)</label>
              <Form.Input placeholder='Select Industry' />
            </Form.Field>
            <label className="form-content-heading" style={{marginTop:'25px'}}>Credentialing & Other Hiring Requirements</label>
            <Divider style={{marginTop:'5px', marginBottom:'5px'}} fitted />
            <Form.Field style={{marginTop:'25px'}} required>
              <label>Minimum Education Requirement</label>
              <Dropdown placeholder='Select Education Requirement' fluid selection options={educationQualifications} />
            </Form.Field>
            <Form.Group style={{marginTop:'25px'}}>
                <Checkbox toggle width={6} label="Must be us citizen?" />
                <Checkbox style={{marginLeft:'35px'}} toggle width={6} label="Do you require security clearance?"/>
            </Form.Group>
            <label className="form-content-heading" style={{marginTop:'25px'}}>Compensation & Work Hours</label>
            <Divider style={{marginTop:'5px', marginBottom:'5px'}} fitted />
            <Form.Group style={{marginTop:'25px'}}>
              <Form.Field required width={12}>
                <label>Base Salary</label>
                <Form.Input placeholder='$' />
              </Form.Field>
              <Form.Field width={4}>
                <label>Currency(Optional)</label>
                <Dropdown placeholder='Select Currency' fluid selection  />
              </Form.Field>
            </Form.Group>
            <label className="form-content-heading" style={{marginTop:'25px'}}>Job Postings Only</label>
            <Divider style={{marginTop:'5px', marginBottom:'5px'}} fitted />
            <Form.Group style={{marginTop:'25px'}}>
              <Form.Field >
                <label>Date Posted (Optional)</label>
                <SemanticDatepicker />
              </Form.Field>
              <Form.Field  >
                <label>Good Through (Optional)</label>
                <SemanticDatepicker />
              </Form.Field>
            </Form.Group>
            <Form.Field>
              <label>Total Job Openings(Optional)</label>
              <Dropdown placeholder='Select Total Job Openings' fluid selection />
            </Form.Field>
            <Button
                style={{float: 'right', "background":"#28516A", "color":"#fff", marginTop:'25px'}}
                title={'Preview'}>
                {'Preview'}
            </Button>
        </Form>

      </div>);
    }
}
export default PostNewJob;
