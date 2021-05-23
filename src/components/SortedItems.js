import React from 'react'
import {TodoItem} from './TodoItem'

function SortedItems(props) {
    console.log('props are :',props.todos);
    return (
        <>
        {
            props.todos.length ===0 ? 'No Data for analytics. please add some todos':props.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}></TodoItem>
            })  
        }
        </>
    )
}

export default SortedItems
