import { Component } from "react";
import PersonalDetails from "./components/PersonalDetails";
import WorkExp from "./components/WorkExp";
import Cv from "./components/cv";
import './App.css'


class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      personalDetails: {},
      workExp: {},

    }

    this.getDetails = this.getDetails.bind(this)
  }

  pd = {}
  work = {}

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

  render(){
    return(
      <div className="App">
        <div className="left">
        <PersonalDetails push={this.getDetails} />
        <WorkExp />
        </div>
        <div className="right">
          <Cv personal={this.state.personalDetails}/>
        </div>

      </div>
    )
  }
}

export default App;
