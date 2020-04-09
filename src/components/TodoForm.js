import React, { useState } from 'react'

export function TodoForm(props) {
    const [form, setForm] = useState('')


    return (
        <form onSubmit={e => {
            e.preventDefault()
            props.addTodo(form)
            setForm('')
        }}>
            <input
                name="todo"
                placeholder="Things to do"
                value={form}
                onChange={e => {
                    setForm(e.target.value)
                    console.log(e.target.value)
                }}
            />
            <button type="submit">Add</button>
        </form>
    )
}