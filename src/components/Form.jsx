function Form({ onSubmit, onChange }) {
  return (
    <div className="form">
      <form>
        <input type="text" onChange={(e) => e.target.value} />
        <br />
        <button onClick={onSubmit}>Add Task</button>
      </form>
    </div>
  )
}

export default Form
