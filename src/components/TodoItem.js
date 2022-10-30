import React from 'react'
import { RiCloseCircleLine } from "react-icons/ri"
import { BiCheckCircle } from "react-icons/bi"

export default function TodoItem(props) {
    const { todo, removeTodo, completeTodo } = props
    return (
        <div className={todo.completed ? "todo-row complete" : "todo-row"}>
            <div className="iconsContainer">
                <BiCheckCircle onClick={() => completeTodo(todo.id)} style={todo.completed ? { color: "green" } : {}}/>
            </div>
            {todo.text}
            <div className="iconsContainer">
                <RiCloseCircleLine style={{ marginRight: 5 }} onClick={() => removeTodo(todo.id)}/>
            </div>
        </div>
    )
}