import React from 'react';
import { useState } from 'react';

function AddTodo(props) {
    const [date,setDate] = useState(new Date());
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [priority,setPriority] = useState('0')

    const submit = (e)=> {
        if(!title || !desc)
        {
            alert('title or description cannot be blank')
        }
        else
        {
            props.addTodo(title,desc,date,priority);
            setTitle('');
            setDesc('');
            setDate('');
            setPriority('0');
        }

        e.preventDefault();

    }
    return (
        <div className='container my-3'>
            <h3>Add todo</h3>
            <form onSubmit={submit}>
                    <div className ="form-group my-3" >
                        <label htmlFor="title">Task</label>
                        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className ="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Task"/>
            
                    </div>
                    <div className ="form-group my-3">
                        <label htmlFor="description">Description</label>
                        <input type="text" value = {desc} onChange={(e)=>setDesc(e.target.value)} className ="form-control" id="description" placeholder="description of task"/>
                    </div>
                    <div className = 'form-group my-3'>
                        <label htmlFor = 'due date'>Due Date</label>
                        <input type="date" value={date} onChange={(e) =>setDate(e.target.value)} classname ="form-control" name="begin" min="1997-01-01" max="2030-12-31"/>
                    </div>
                    <div className = 'form-group my-3'>
                        <label htmlFor = 'priority'>Priority : </label>
                        <select value={priority} onChange={(e)=>setPriority(e.target.value)} classname ="form-control">
                            <option value="3">High</option>
                            <option value="2">Medium</option>
                            <option value="1">Low</option>
                            <option value='0'>None</option>
                        </select>
                    </div>
                    <button type="submit" className ="btn btn-success my-3">Submit</button>
            </form>
        </div>
    )
}
export default AddTodo
