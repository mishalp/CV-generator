import React from "react";
import { Component } from "react";
import './personal.css'


class PersonalDetails extends Component{
    constructor(props){
        super(props)

        this.state = {
              name: 'John Doeman',
              title: 'Software Developer',
              email: 'doeman@gmail.com',
              number: '01234567890',
              place: 'Bristol, UK',
              desc: 'excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi.'
          }

            

          this.handleChange = this.handleChange.bind(this)
        }

        temp = {
            name: 'John Doeman',
            title: 'Software Developer',
            email: 'doeman@gmail.com',
            number: '01234567890',
            place: 'Bristol, UK',
            desc: 'excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi.'
            }

     handleChange(e){
        this.temp[e.target.id] = e.target.value;
        this.setState({
                name: this.temp.name,
                title: this.temp.title,
                email: this.temp.email,
                number: this.temp.number,
                place: this.temp.place,
                desc: this.temp.desc
        })
        console.log(this.state);
        this.props.push(this.temp)
     }

    render(){
        const details = this.state
        return(
            <div className="personal">
                <p>Personal Deatails</p>
                    <div className="inputs">
                    <input type="text" placeholder="Name" id="name" value={details.name} onInput={this.handleChange} />
                    <input type="text" placeholder="Job Title" id="title" value={details.title} onInput={this.handleChange} />
                    <input type="email" placeholder="E-mail" id="email" value={details.email} onInput={this.handleChange} />
                    <input type="number" placeholder="number" id="number" value={details.number} onInput={this.handleChange} />
                    <input type="text" placeholder="Place" id="place" value={details.place} onInput={this.handleChange} />
                    <textarea rows="6" cols="50" id="desc" value={details.desc} onInput={this.handleChange} />

                    </div>
            </div>
        )
    }
}

export default PersonalDetails