

const TodosList = ({ todos, setTodos, setEditTodo }) => {

    const handleDelete = ({title}) => {
        setTodos(todos.filter((todo) => todo.title !== title))
    }

    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.title === todo.title) {
                    return {...item, completed: !item.completed}
                }
                return item
            })
        )
    }

    const handleEditTodo = ({title}) => {
        const findTodo = todos.find((todo) => todo.title === title)
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