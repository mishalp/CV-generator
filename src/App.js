import { Component } from "react";
import PersonalDetails from "./components/PersonalDetails";
import WorkExp from "./components/WorkExp";
import Education from "./components/Education";
import Cv from "./components/cv";
import './App.css'


class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      personalDetails: {},
      workExp: [],
      education: [],

    }

    this.init()

    this.getDetails = this.getDetails.bind(this)
    this.getWork = this.getWork.bind(this)
    this.getEd = this.getEd.bind(this)
  }

  pd = {}
  work = {}
  education = {}

  init(){
    this.pd = this.state.personalDetails;
  }


  getDetails(data){
    this.pd = data

    this.setState({
      personalDetails: this.pd,
      workExp: this.work,
      education: this.education
    })
  }

  getWork(work){
    this.work = work;

    this.setState({
      personalDetails: this.pd,
      workExp: this.work,
      education: this.education,
    })
  }

  getEd(education){
    this.education = education

    this.setState({
      personalDetails: this.pd,
      workExp: this.work,
      education: this.education,
    })
  }


  render(){
    return(
      <div className="App">
        <div className="left">
        <PersonalDetails push={this.getDetails} />
        <WorkExp push={this.getWork} />
        <Education push={this.getEd} />
        </div>
        <div className="right">
          <Cv personal={this.state.personalDetails} work={this.state.workExp} education={this.state.education} />
        </div>

      </div>
    )
  }
}

export default App;
