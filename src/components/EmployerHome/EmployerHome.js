import React from 'react'
import ReactDOM from "react-dom";
import {Container, Tab, Menu, Label, Icon} from 'semantic-ui-react'
import "./EmployerHome.css";
import JobPosted from "./JobPosted/JobPosted"
export class EmployerHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          businessName:"Vantage Point"
        };
    }

    render() {
      const panes = [
        {
          menuItem: (
            <Menu.Item key='talentPipeline'>
              <div>
                <div style={{textAlign :"center", margin:'10px'}}><img className="timeline tab image" src={require('../../assets/Employer/003-group.png')} /></div>
                <div style={{textAlign :"center"}}> Talent Pipeline </div>
              </div>
            </Menu.Item>
          ),
          render: () => <Tab.Pane attached={true}>Talent Pipeline</Tab.Pane>,
        },
        {
          menuItem: (
            <Menu.Item key='advocateNetwork'>
              <div>
                <div style={{textAlign :"center", margin:'10px'}}><img  className="advocate tab image" src={require('../../assets/Employer/consulting.png')}/></div>
                <div style={{textAlign :"center"}}> Advocate Network </div>
              </div>
            </Menu.Item>
          ),
          render: () => <Tab.Pane attached={true}>Advocate Network</Tab.Pane>,
        },
        {
          menuItem: (
            <Menu.Item key='jobPosted'>
              <div>
                <div style={{textAlign :"center", margin:'10px'}}><img  className="job-posted tab image" src={require('../../assets/Employer/001-portfolio.png')}  style={{displayInline :"block"}}/></div>
                <div style={{textAlign :"center"}}> Job Posted </div>
              </div>
            </Menu.Item>
          ),
          render: () => <Tab.Pane attached={true}><JobPosted /></Tab.Pane>,
        },
      ]
      return (
        <div id="employerHome" className="employerHomeLayout">
            <div style={{textAlign :"center", background:'#FFF', padding:'10px'}}><img src={require('../../assets/Employer/employer_home 5@4x.png')}  style={{displayInline :"block"}}/></div>
            <div style={{textAlign :"center", background:'#FFF'}}> Welcome, {this.state.businessName}!</div>
            <Tab menu={{ secondary: true, pointing: true , style: { display: "flex", justifyContent: "center", height:"100%" }}} panes={panes} />
        </div>
      );
    }
}
export default EmployerHome;
