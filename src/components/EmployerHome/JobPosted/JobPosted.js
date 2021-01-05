
import React from 'react'
import ReactDOM from "react-dom";
import {
  Link
} from "react-router-dom";
import {Container, Button, Form, Segment, Dimmer, Loader, Grid, Modal, Header, Image,
Divider} from 'semantic-ui-react'
import CommonModal from '../../common/modal/CommonModal'
import { properties } from '../../common/properties.js';
import "./JobPosted.css";
import PostNewJob from "./PostNewJob"
import axios from 'axios';
import _ from 'lodash';
import JobCard from "../../common/cards/JobCard"
export class JobPosted extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          loader:false,
          itemsPerRow:3,
          openPostNewJobModal: false,
          openNewJobEntryFormModal: false,
          successToastVisible:false,
          jobsPosted:[],
        };
    }
    componentDidMount() {
        this.fetchJobs();
    }

    togglePostNewJobModal = () => {
        this.setState({
            openPostNewJobModal: !this.state.openPostNewJobModal
        });
    }

    toggleNewJobEntryFormModal = () => {
        this.setState({
            openNewJobEntryFormModal: !this.state.openNewJobEntryFormModal
        });
    }

    renderPostNewJobModal = () => {
      return (  <CommonModal
            open={this.state.openPostNewJobModal}
            title="Create a Job Posting"
            size="small"
            cancelAction={this.togglePostNewJobModal}
            confirmAction={() => {
                this.togglePostNewJobModal()
                this.setState({ successToastVisible: true })
            }}
        >
            <Container style={{margin:"auto", padding:"20px"}}>
              <Form style={{ padding: '24px' }}>
                  <Container style={{textAlign:"center",fontSize:"18px", color: "#1D272D"}} ><b>Import or Create a Job Posting</b></Container>
                  <Container style={{textAlign:"center",fontSize:"14px", color: "#1D272D", marginTop:"25px"}} >Import job posting from existing websites</Container>
                  <Container className="post-new-job-import"  style={{textAlign:"center"}}>
                    <Button  style={{backgroundColor: '#0077B5', marginTop:'20px', color:"#FFF"}}>Import from Linkedin</Button>
                    <Button  style={{backgroundColor: '#DD7F00', marginTop:'20px', color:"#FFF"}}>Import from Indeed</Button>
                    <Button  style={{backgroundColor: '#3B00D9', marginTop:'20px', color:"#FFF"}}>Import from Monster</Button>
                    <Divider style={{marginTop:'20px'}}horizontal>OR</Divider>
                    <Button onClick={()=> {
                      this.togglePostNewJobModal();
                      this.toggleNewJobEntryFormModal();
                    }} style={{backgroundColor: '#28516A ', marginTop:'20px', color:"#FFF"}}>Post New Job</Button>
                  </Container>
              </Form>
            </Container>
        </CommonModal>)
    }

    renderNewJobEntryFormModal = () => {
      return (  <CommonModal
            open={this.state.openNewJobEntryFormModal}
            title="Create a Job Posting"
            size="small"
            cancelAction={this.toggleNewJobEntryFormModal}
            confirmAction={() => {
                this.toggleNewJobEntryFormModal()
                this.setState({ successToastVisible: true })
            }}
        >
            <Container style={{margin:"auto", padding:"20px"}}>
              <PostNewJob />
            </Container>
        </CommonModal>)
    }

    fetchJobs = () => {
      this.setState({loader:true})
      let fetchJobsEndpoint = properties.vcEmployerServiceEndpoint + 'getJobsPosted/123/testsessionid';
      axios.get(fetchJobsEndpoint)
        .then(function (response) {
            const jobsPosted = response.data;
            jobsPosted.splice(0, 0, {"postNewJob":true});
            this.setState({jobsPosted:jobsPosted})
            this.setState({loader:false})
        }.bind(this))
        .then(function (error) {
            console.log(error);
            this.setState({loader:false})
        }.bind(this));
    }

    buildGrid = () => {
      if (this.state.jobsPosted) {
        //this.state.data.splice(0, 0, {"postNewJob":true});
        let dataCopy = [...this.state.jobsPosted]
        let gridArray = []
        let gridRow = []
        while (dataCopy[0]) {
          for (let i = 0; i < this.state.itemsPerRow; i++) {
            if (dataCopy[0]) {
                gridRow.push(dataCopy.shift())
            }
          }
          gridArray.push(gridRow)
          gridRow = []
        }
        return gridArray.map((row, index) => {
          return (
            <Grid.Row key={index}>
              {row.map(jobData => {
                    if (_.has(jobData, "postNewJob")) {
                      return (<Grid.Column><Segment id="postNewJob"><Button onClick={() => {this.togglePostNewJobModal()}} className="tertiary"  basic color='blue'><div>+</div><div>Post a job</div></Button></Segment></Grid.Column>)
                    } else {
                      return (<Grid.Column><JobCard jobData={jobData}/></Grid.Column>)
                    }
                  }
                )
              }
            </Grid.Row>
          )
        })
      }
    }

    render() {
      return (<Segment id="jobPosted" className="jobPosted">
              	<Dimmer active={this.state.loader} inverted>
              		<Loader inverted>Loading</Loader>
              	</Dimmer>
                <div>
                {this.state.jobsPosted ? (
                    <Grid columns={this.state.itemsPerRow}>
                      {this.buildGrid()}
                     </Grid>
                   ) : ''}
                   {this.renderPostNewJobModal()}
                   {this.renderNewJobEntryFormModal()}
                </div>
              </Segment>
      );
    }
}

export default JobPosted;
