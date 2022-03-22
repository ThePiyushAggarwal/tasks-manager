const List = ({ list }) => {
  return (
    <div className="list">
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.task}</li>
        ))}
      </ul>
    </div>
  )
}

export default List
