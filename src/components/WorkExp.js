import React, { useState, useEffect} from "react";
import './workExp.css'


let temp = [
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

const WorkExp = (props)=>{
    const [data, setData] = useState(temp)

    useEffect(()=>{
        props.push(temp)
    }, []);

    const handleChange =(e)=>{
        var i = e.target.dataset.index
        temp[i][e.target.id] = e.target.value
        setData([...temp])
        props.push(temp)
    }

    const add = ()=>{
        temp.push({
            company: '',
            position: '',
            startDate: '',
            endDate: '',
            desc: '',
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
            <p>Work Experience</p>
                    {data.map((data, index)=>{
                        return(
                            <div className="inputs" key={index}>
                            <input type="text" placeholder="Company" id="company" data-index={index} value={data.company} onInput={handleChange} />
                            <input type="text" placeholder="Position" id="position" value={data.position} data-index={index}  onInput={handleChange} />
                            <input type="text" placeholder="Start date" id="startDate" value={data.startDate} data-index={index} onInput={handleChange} />
                            <input type="text" placeholder="End date" id="endDate" value={data.endDate} data-index={index} onInput={handleChange} />
                            <textarea rows="5" cols="50" id="desc"  data-index={index} value={data.desc} onInput={handleChange} />
                            <button onClick={del} id="remove-btn" data-index={index}>Remove</button>
                            </div>
                        )
                    })}
                    <button id="add-btn" onClick={add}>Add Experience</button>
        </div>
    )

}

export default WorkExp