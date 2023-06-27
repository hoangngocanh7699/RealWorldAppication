import Form from './component/form/form'
import Header from './component/header/header'
import './App.css'
import { useState } from 'react'
import TodosList from './component/todosList/todosList'


const App = () => {

    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])
    const [editTodo, setEditTodo] = useState(null)

    return (
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <Header />
                </div>
                <div>
                    <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo}/>
                </div>
                <div>
                    <TodosList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
                </div>
            </div>
        </div>
    )
}

export default App