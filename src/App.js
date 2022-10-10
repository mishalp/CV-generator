import { Component } from "react";
import PersonalDetails from "./components/PersonalDetails";
import WorkExp from "./components/WorkExp";
import Cv from "./components/cv";
import './App.css'


class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      personalDetails: {
        name: 'John Doeman',
        title: 'Software Developer',
        email: 'doeman@gmail.com',
        number: '01234567890',
        place: 'Bristol, UK',
        desc: 'excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi.'
      },
      workExp: {},

    }

    this.init()

    this.getDetails = this.getDetails.bind(this)
    this.getWork = this.getWork.bind(this)
  }

  pd = {}
  work = {}

  init(){
    this.pd = this.state.personalDetails;
    this.work = this.state.workExp;
  }


  getDetails({name, title, email, number, place, desc}){
    this.pd.name = name;
    this.pd.title = title;
    this.pd.email = email;
    this.pd.number = number
    this.pd.place = place;
    this.pd.desc = desc

    this.setState({
      personalDetails: this.pd,
      workExp: this.work,
    })
  }

  getWork({company, position, startDate, endDate, desc}){
    console.log();
    this.work.company = company;
    this.work.position = position;
    this.work.startDate = startDate;
    this.work.endDate = endDate;
    this.work.desc = desc;

    this.setState({
      personalDetails: this.pd,
      workExp: this.work,
    })
  }


  render(){
    return(
      <div className="App">
        <div className="left">
        <PersonalDetails push={this.getDetails} />
        <WorkExp push={this.getWork} />
        </div>
        <div className="right">
          <Cv personal={this.state.personalDetails} work={this.state.workExp}/>
        </div>

      </div>
    )
  }
}

export default App;
