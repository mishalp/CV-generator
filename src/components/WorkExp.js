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
              endDate: '',
              desc: '',
          }

            

          this.handleChange = this.handleChange.bind(this)
        }

        temp ={
            company: '',
            position: '',
            startDate: '',
            endDate: '',
            desc: '',
        }

     handleChange(e){
        this.temp[e.target.id] = e.target.value;
        this.setState({
            company: this.temp.company,
            position: this.temp.position,
            startDate: this.temp.startDate,
            endDate: this.temp.endDate,
            desc: this.temp.desc,
        })
        this.props.push(this.temp)
     }

    render(){
        return(
            <div className="personal">
                <p>Work Experience</p>
                    <div className="inputs">
                    <input type="text" placeholder="Company" id="company"  onInput={this.handleChange} />
                    <input type="text" placeholder="Position" id="position"  onInput={this.handleChange} />
                    <input type="date" placeholder="Start date" id="startDate"  onInput={this.handleChange} />
                    <input type="date" placeholder="End date" id="endDate"  onInput={this.handleChange} />
                    <input type="text" placeholder="desc" id="desc"  onInput={this.handleChange} />

                    </div>
            </div>
        )
    }
}

export default WorkExp