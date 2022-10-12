import React, { useEffect, useState } from "react";
import './workExp.css'


let temp = [
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

const Education = (props)=>{
    const [data, setData] = useState(temp)

    useEffect(()=>{
        props.push(temp)
    }, [])

    const handleChange = (e)=>{
        var i = e.target.dataset.index
        temp[i][e.target.id] = e.target.value
        setData([...temp])

        props.push(temp)
    }

    const add = ()=>{
        temp.push({
            course: '',
            university: '',
            startDate: '',
            endDate: '',
        })
        setData([...temp])
        props.push(temp)
    }

    const del = (e)=>{
        var i = e.target.dataset.index;
        temp.splice(i, 1)
        setData([...temp])
        props.push(temp)
    }

    return(
        <div className="workExp">
            <p>Education</p>
                    {data.map((data, index)=>{
                        return(
                            <div className="inputs" key={index}>
                            <input type="text" placeholder="Course" id="course" data-index={index} value={data.course} onInput={handleChange} />
                            <input type="text" placeholder="university" id="university" value={data.university} data-index={index}  onInput={handleChange} />
                            <input type="text" placeholder="Start date" id="startDate" value={data.startDate} data-index={index} onInput={handleChange} />
                            <input type="text" placeholder="End date" id="endDate" value={data.endDate} data-index={index} onInput={handleChange} />
                            <button onClick={del} id="remove-btn" data-index={index}>Remove</button>
                            </div>
                        )
                    })}
                    <button id="add-btn" onClick={add}>Add Education</button>
        </div>
    )
}

export default Education