import React from 'react'

export function Todo(props) {

    return (
        <div>
            <h3
            className={`item${props.item.completed ? 'completed' : ''}`}
            onClick={e => {
                e.preventDefault()
                props.handleComplete(props.item.id)
            }}
            >
                {props.item.todo}
                </h3>
        </div>
    )
}