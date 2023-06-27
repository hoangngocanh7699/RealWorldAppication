/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */

import { useCallback, useEffect, useRef } from "react"

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {

    const refInput = useRef(null)

    const updateTodo = (title, complete) => {
        const newTodo = todos.map((todo) => {
            return todo.title === title ? { title, complete } : todo
        })
        setTodos(newTodo)
        setEditTodo('')
    }

    useEffect(() => {
        refInput.current.focus()
        if (editTodo) {
            setInput(editTodo.title)
        }else {
            setInput('')
        }
    }, [setInput, editTodo])

    const handleInput = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = useCallback((event) => {
        event.preventDefault()
        if (!editTodo) {
            setTodos([...todos, { title: input, complete: false}])
            setInput('')
        }else {
            updateTodo(input, editTodo.title, editTodo.complete)
        }
    }, [input])

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={refInput} placeholder="Enter a Todo..." className="task-input" value={input} required onChange={handleInput}/>
            <button className="button-add" type="submit">Add</button>
        </form>
    )

}

export default Form