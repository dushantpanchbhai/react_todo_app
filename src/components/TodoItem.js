import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
    const priority = {
        '0' : 'None',
        '1': 'Low',
        '2': 'Medium',
        '3': 'High',
    }

    var color = null;
    
    var todoDate = new Date(todo.date.split('-').reverse())
    var current = new Date()
    var diff = todoDate.getTime()-current.getTime();

    //style for the color 
    const style = {
        'due' : {'color' : 'red'},
        'near' : {'color': 'blue'},
        'noworries' : {'color':'green'}
    };
    
    //if condition for deciding color
    if(diff<=0)
    {
       color = 'due';
    }
    else if(diff<4)
    {
        color = 'near';
    }
    else
    {
        color = 'noworries'
    }

    const stylepriority = {
        '3' : {'color' : 'red'},
        '2' : {'color': 'blue'},
        '1' : {'color':'green'},
        '0' : {'color':'grey'}
    };

    return (
        <div className="container my-3">
            <h5>{todo.sno} {todo.task}</h5>
            <p>
                Description : {todo.desc}
                <br/>
                Due date : <span style = {style[color]}>{todo.date}</span>
                <br></br>
                Priority :<span style = {stylepriority[todo.priority]}>{priority[todo.priority]}</span>
            </p>
            <button className='btn btn-danger' onClick={() => {onDelete(todo)}} >Delete</button>
            <hr></hr>
        </div>
        
    )
}
