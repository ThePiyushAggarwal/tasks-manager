import { useState } from 'react'
// import Form from './components/Form'

// import List from './components/List'

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      task: "Do this thing right before you don't do another thing",
    },
    {
      id: 2,
      task: "o this thing right before you don't do another thing",
    },
  ])

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(123)
  }

  const onChange = (e) => {
    const ji = { id: 12, task: e.target.value }
    setTodo(...todo, ji)
  }

  return (
    <div className="container">
      <ul>
        {todo.map((item, index) => (
          <li key={index}> {item.task}</li>
        ))}
      </ul>

      <form>
        <input type="text" onChange={onChange} />
        <br />
        <button onClick={onSubmit}>Add Task</button>
      </form>

      {/* <List list={todo} /> */}
      {/* <Form onSubmit={onSubmit} onChange={onChange} /> */}
    </div>
  )
}

export default App
