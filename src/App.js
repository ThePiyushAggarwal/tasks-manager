import { useState } from 'react'

function App() {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([
    {
      task: "Do this thing right before you don't do another thing",
      isCompleted: true,
    },
    {
      task: "this thing right before you don't do another thing, you know what i mean?",
      isCompleted: false,
    },
  ])

  const onSubmit = (e) => {
    e.preventDefault()
    if (!value) return
    setTodos([...todos, { task: value, isCompleted: false }])
    setValue('')
  }

  const completeTask = (index) => {
    const temp = [...todos]
    if (temp[index].isCompleted) {
      temp[index].isCompleted = false
    } else {
      temp[index].isCompleted = true
    }
    setTodos(temp)
  }

  const deleteTask = (index) => {
    const temp = [...todos]
    temp.splice(index, 1)
    setTodos(temp)
  }

  return (
    <div className="container">
      <ul>
        {todos.map((item, index) => (
          <li
            key={index}
            style={{ textDecoration: item.isCompleted ? 'line-through' : '' }}
          >
            {item.task}
            <button onClick={() => completeTask(index)}>
              Mark Complete
            </button>{' '}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <form>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <br />
        <button onClick={onSubmit}>Add Task</button>
      </form>
    </div>
  )
}

export default App
