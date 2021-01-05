import React from 'react';
import {
  Link
} from "react-router-dom";
import { Card, Button, Image, Icon,Label } from 'semantic-ui-react';
import _ from 'lodash';

export class JobCard extends React.Component {
  constructor(props) {
    super(props);
    this.showRoleModal = this.showRoleModal.bind(this);
    this.showApplicantsModal = this.showApplicantsModal.bind(this);
    this.getPostedDateToDisplay = this.getPostedDateToDisplay.bind(this);
  }
  showRoleModal = (roleId) => {
    alert(roleId)
  }

  showApplicantsModal = (jobId) => {
    alert(jobId)
  }

  getPostedDateToDisplay = (postedDateString) => {
    let postedDate = new Date(postedDateString)
    let todayDate = new Date()
    let diff = (postedDate.getTime() - todayDate.getTime()) / 1000;
    diff /= (60 * 60);
    let hoursDifference = Math.abs(Math.round(diff));
    let returnValueToDisplay = null;
    if (hoursDifference > 24) {
      hoursDifference /= 24
      let daysDiff = Math.abs(Math.round(hoursDifference))
      returnValueToDisplay = "Posted " + daysDiff + " days ago";
    } else {
      returnValueToDisplay = "Posted " + hoursDifference + " hrs ago";
    }
    return returnValueToDisplay;

  }
  render() {
      const { jobData } = this.props;

      return (
            <Card>
              <Card.Content>
                <Image
                  floated='left'
                  size='mini'
                  src={require('../../../assets/Employer/leidos.png')}
                  //src={jobData.employerImage}
                />
                <div style={{float:'right'}}><Card.Meta >{this.getPostedDateToDisplay(jobData.jobPosted)}</Card.Meta></div>
                <Card.Description>
                  <Link  onClick={() => { this.showRoleModal(jobData.jobRoleId) }}>{jobData.jobRole}</Link>
                </Card.Description>
                <Card.Description>
                  <b>{jobData.employerName}</b>
                </Card.Description>
                <Card.Meta >{jobData.location}</Card.Meta>
                <Card.Content style={{float:'left', marginTop:'10px'}}><Label id="jobCardViews"><Icon name='eye' />{jobData.viewsCount} views</Label></Card.Content>
                <Card.Content style={{float:'right', marginTop:'10px'}}>
                  <Link  onClick={() => { this.showApplicantsModal(jobData.jobId) }}>
                    <Label id="jobCardApplicants"><Icon name='users' />{jobData.applicantsCount} Applicants</Label>
                  </Link>
                </Card.Content>
              </Card.Content>
            </Card>
      )
  }
}
export default JobCard;
