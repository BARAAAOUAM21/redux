import React from 'react'
import { Button } from 'react-bootstrap'
import EditTodo from './EditTodo'
import { useDispatch } from 'react-redux'
import { deletetask } from '../redux/actions/todoActions'

const Todo = ({el}) => {
    console.log(el)
    const dispatch = useDispatch()
    return (
        <div style={{display:"flex"}}>
            <h2> {el.text} </h2>
            <EditTodo el={el} />0
            <button onClick ={()=>dispatch(deletetask(el.id))}  > DELETE</button>
        </div>
    )
}

export default Todo
