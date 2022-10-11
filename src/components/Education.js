import React from "react";
import { Component } from "react";
import './workExp.css'


class Education extends Component{
    temp = [
        {
            course: 'CS50: Introduction to Computer Science',
            university: 'Harvard University',
            startDate: '2020',
            endDate: 'Present',
        },
        {
            course: 'Fullstack JavaScript',
            university: 'The Odin Project',
            startDate: '2019',
            endDate: 'Present',
        }
    ]
    constructor(props){
        super(props)


        this.state = {
            data: this.temp,
        }

        this.props.push(this.temp)

        this.handleChange = this.handleChange.bind(this)
        this.add = this.add.bind(this)
        this.del = this.del.bind(this)
    }

     handleChange(e){
        var i = e.target.dataset.index
        this.temp[i][e.target.id] = e.target.value
        this.setState({
            data: this.temp,
        })
        console.log(this.temp);

        this.props.push(this.temp)
     }

     add(){
        this.temp.push({
            course: '',
            university: '',
            startDate: '',
            endDate: '',
        })
        this.setState({
            data: this.temp
        })
        this.props.push(this.temp)
     }

     del(e){
        var i = e.target.dataset.index;
        this.temp.splice(i, 1)
        this.setState({
            data: this.temp
        })
        this.props.push(this.temp)
     }

    render(){
        return(
            <div className="workExp">
                <p>Education</p>
                        {this.state.data.map((data, index)=>{
                            return(
                                <div className="inputs" key={index}>
                            <input type="text" placeholder="Course" id="course" data-index={index} value={data.course} onInput={this.handleChange} />
                                <input type="text" placeholder="university" id="university" value={data.university} data-index={index}  onInput={this.handleChange} />
                                <input type="text" placeholder="Start date" id="startDate" value={data.startDate} data-index={index} onInput={this.handleChange} />
                                <input type="text" placeholder="End date" id="endDate" value={data.endDate} data-index={index} onInput={this.handleChange} />
                                <button onClick={this.del} id="remove-btn" data-index={index}>Remove</button>
                                </div>
                            )
                        })}
                        <button id="add-btn" onClick={this.add}>Add Education</button>
            </div>
        )
    }
}

export default Education