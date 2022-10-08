import React from "react";
import { Component } from "react";
//import './personal.css'


class WorkExp extends Component{
    constructor(props){
        super(props)

        this.state = {
              company: '',
              position: '',
              startDate: '',
              endDAte: '',
              desc: '',
          }

            

          this.handleChange = this.handleChange.bind(this)
        }


     handleChange(e){

     }

    render(){
        return(
            <div className="personal">
                <p>Work Experience</p>
                    <div className="inputs">
                    <input type="text" placeholder="Name" id="name"  onInput={this.handleChange} />
                    <input type="text" placeholder="Job Title" id="title"  onInput={this.handleChange} />
                    <input type="email" placeholder="E-mail" id="email"  onInput={this.handleChange} />
                    <input type="text" placeholder="Place" id="place"  onInput={this.handleChange} />

                    </div>
            </div>
        )
    }
}

export default WorkExp