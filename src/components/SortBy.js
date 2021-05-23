import React from 'react'

function SortBy(props) {
    return (
        <div className='container'>
            sort by : 
            <select value={props.sortField} onClick={(event)=> props.setSortField(event.target.value)}>
                <option value="dateAdded">Date Added</option>
                <option value="dueDate">Due date</option>
                <option value="priority">Priority</option>
            </select>
        </div>
    )
}

export default SortBy
