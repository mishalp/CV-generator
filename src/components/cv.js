import React, { Component } from "react";
import './cv.css'

class Cv extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const data = this.props.personal;
        const work = this.props.work;

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
                        <p>{work.company}</p>
                    </div>

                </div>
            </div>
        )
    }
}



export default Cv