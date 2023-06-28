

const TodosList = ({ todos, setTodos, setEditTodo }) => {

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {...item, completed: !item.completed}
                }
                return item
            })
        )
    }

    const handleEditTodo = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id)
        setEditTodo(findTodo)
    }

    return (
        <div>
            {todos.map((todo, index) => {

                return (
                    <li className="list-item" key={index}>
                        <input type="text" value={todo.title} className={`list ${todo.completed ? 'complete' : ''}`} onChange={(event) => event.preventDefault()}/>
                        <div>
                            <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
                                <i className="fa fa-check-circle"></i>
                            </button>
                            <button className="button-edit task-button" onClick={() => handleEditTodo(todo)}>
                                <i className="fa fa-edit"></i>
                            </button>
                            <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </div>
                    </li>
                )
            })}
        </div>
    )
}

export default TodosList