import React from "react";
import { Component } from "react";
import './workExp.css'


class WorkExp extends Component{
    temp = [
        {
            company: 'A Software Company',
            position: 'Software Engineer',
            startDate: '2018',
            endDate: 'Present',
            desc: 'Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commodo nisi nostrud.',
        },
        {
            company: 'My First Company',
            position: 'Graduate Engineer',
            startDate: '2017',
            endDate: '2018',
            desc: 'Irure dolor incididunt sint et ullamco. Commodo laboris amet aliquip incididunt do ut est exercitation reprehenderit magna sit laboris est mollit.',
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
            company: '',
            position: '',
            startDate: '',
            endDate: '',
            desc: '',
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
                <p>Work Experience</p>
                        {this.state.data.map((data, index)=>{
                            return(
                                <div className="inputs" key={index}>
                            <input type="text" placeholder="Company" id="company" data-index={index} value={data.company} onInput={this.handleChange} />
                                <input type="text" placeholder="Position" id="position" value={data.position} data-index={index}  onInput={this.handleChange} />
                                <input type="text" placeholder="Start date" id="startDate" value={data.startDate} data-index={index} onInput={this.handleChange} />
                                <input type="text" placeholder="End date" id="endDate" value={data.endDate} data-index={index} onInput={this.handleChange} />
                                <textarea rows="5" cols="50" id="desc"  data-index={index} value={data.desc} onInput={this.handleChange} />
                                <button onClick={this.del} id="remove-btn" data-index={index}>Remove</button>
                                </div>
                            )
                        })}
                        <button id="add-btn" onClick={this.add}>Add field</button>
            </div>
        )
    }
}

export default WorkExp