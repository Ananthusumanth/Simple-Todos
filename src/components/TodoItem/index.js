// Write your code here
import './index.css'

const TodoItem = props => {
  const {
    todoItem,
    deleteUser,
    editTitle,
    editId,
    onChangeEditInput,
    saveChange,
  } = props
  const {id, title} = todoItem

  const onDelete = () => {
    deleteUser(id)
  }

  const edit = () => {
    editTitle(id)
  }

  const save = () => {
    saveChange(id)
  }

  return (
    <li>
      <div className="container">
        <input type="checkbox" className="checkbox" />
        <div className="titleSet">
          {editId.includes(id) ? (
            <input
              type="text"
              className="editInput"
              placeholder="Enter the new text"
              value={title}
              onChange={e => onChangeEditInput(id, e.target.value)}
            />
          ) : (
            <p className="title">{title}</p>
          )}
        </div>
        {editId.includes(id) ? (
          <button type="button" className="save-button" onClick={save}>
            Save
          </button>
        ) : (
          <button type="button" className="edit-button" onClick={edit}>
            Edit
          </button>
        )}
        <button type="button" className="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
