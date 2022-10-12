import React, { useEffect, useState } from "react";
import './personal.css'


let temp = {
    name: 'Mohammed Mishal P',
    title: 'Software Developer',
    email: 'hehehe@gmail.com',
    number: '01234567890',
    place: 'Bristol, UK',
    desc: 'excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi.'
}

const PersonalDetails = (props)=>{
    const [data, setData] = useState(temp)

    useEffect(()=>{
        props.push(temp)
    }, [])

    const handleChange = (e)=>{
        temp[e.target.id] = e.target.value;
        setData({...temp})
        props.push(temp)
    }

    return(
        <div className="personal">
            <p>Personal Deatails</p>
                <div className="inputs">
                <input type="text" placeholder="Name" id="name" value={data.name} onInput={handleChange} />
                <input type="text" placeholder="Job Title" id="title" value={data.title} onInput={handleChange} />
                <input type="email" placeholder="E-mail" id="email" value={data.email} onInput={handleChange} />
                <input type="number" placeholder="number" id="number" value={data.number} onInput={handleChange} />
                <input type="text" placeholder="Place" id="place" value={data.place} onInput={handleChange} />
                <textarea rows="6" cols="50" id="desc" value={data.desc} onInput={handleChange} />

                </div>
        </div>
    )
}
export default PersonalDetails