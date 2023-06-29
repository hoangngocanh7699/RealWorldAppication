/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */

import { useEffect, useCallback, useRef } from "react"

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {

    const refInput = useRef(null)

    const updateTodo = (input, id, complete) => {
        console.log('update todo=============')
        const newTodo = todos.map((todo) => {
            return todo.id === id ? {title: input, id, complete} : todo
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
            setTodos([...todos, { title: input, complete: false, id: Math.floor(Math.random() * 1000)}])
            setInput('')
        }else {
            updateTodo(input, editTodo.id, editTodo.complete)
        }
    },[input])

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={refInput} placeholder="Enter a Todo..." className="task-input" value={input} required onChange={handleInput}/>
            <button className="button-add" type="submit">
                {editTodo ? 'Edit' : 'Add'}
            </button>
        </form>
    )

}

export default Form