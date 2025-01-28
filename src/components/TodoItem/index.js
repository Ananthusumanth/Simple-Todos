// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, deleteUser} = props
  const {id, title} = todoItem

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li>
      <div className="container">
        <p className="title">{title}</p>
        <button type="button" className="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
