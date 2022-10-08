import React, { Component } from "react";
import './cv.css'

class Cv extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const data = this.props.personal
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
                        <p>excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi.</p>
                    </div>
                    <div className="cv-works">
                        <h3>Work Experience</h3>
                    </div>

                </div>
            </div>
        )
    }
}



export default Cv