import React, { useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import WorkExp from "./components/WorkExp";
import Education from "./components/Education";
import Cv from "./components/cv";
import './App.css'


const Header =()=>{
  return(
    <div className="head">
      <p>CV GENERATOR</p>
    </div>
  )
}

const App = ()=>{
  const [personalData, setPersonalData] = useState({});
  const [workExp, setWorkExp] = useState([]);
  const [edu, setEdu] = useState([])

  const getDetails = (data)=>{
    setPersonalData({...data})
  }

  const getWork = (data)=>{
    setWorkExp([...data])
  }

  const getEd = (data)=>{
    setEdu([...data])

  }

  return(
    <div>
      <Header />
    <div className="App">
      <div className="left">
      <PersonalDetails push={getDetails} />
      <WorkExp push={getWork} />
      <Education push={getEd} />
      </div>
      <div className="right">
        <Cv personal={personalData} work={workExp} education={edu} />
      </div>

    </div>
    </div>
  )
}

export default App;
