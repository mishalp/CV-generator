import React, { Component } from "react";
import './cv.css'

class Cv extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const data = this.props.personal;
        const work = this.props.work;
        const education = this.props.education

        return(
            <div className="sheet">
                <div className="header">
                    <div className="cv-right">
                        <h1>{data.name}</h1>
                        <p>{data.title}</p>
                    </div>
                    <div className="cv-left">
                        <div>{data.number}</div>
                        <div>{data.email}</div>
                        <div>{data.place}</div>
                    </div>
                </div>
                <hr />
                <div className="cv-body">
                    <div className="cv-desc">
                        <p>{data.desc}</p>
                    </div>
                    <div className="cv-works">
                        <h3>Work Experience</h3>
                        {work.map((work, index)=>{
                            return(
                                <div className="work" key={index}>
                                    <div className="work-head">
                                        <h4>{work.position}</h4>
                                        <p>{work.company} | {work.startDate}-{work.endDate}</p>
                                    </div>
                                    <p>{work.desc}</p>
                                </div>
                            )
                        })}
                    </div>

                    <div className="cv-works">
                        <h3>Education</h3>
                        {education.map((data, index)=>{
                            return(
                                <div className="work" key={index}>
                                    <div className="work-head">
                                        <h4>{data.course}</h4>
                                        <p>{data.university} | {data.startDate}-{data.endDate}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        )
    }
}



export default Cv