// Write your code here
import './index.css'

const TodoItem = props => {
  const {
    todoItem,
    deleteUser,
    editTitle,
    editId,
    onChangeEditInput,
    editValue,
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
        {editId === id ? (
          <>
            <div className="titleSet">
              <input
                type="text"
                className="editInput"
                placeholder="Enter the new text"
                value={title}
                onChange={e => onChangeEditInput(id, e.target.value)}
              />
            </div>
            <button type="button" className="save-button" onClick={save}>
              Save
            </button>
          </>
        ) : (
          <>
            <div className="titleSet">
              <p className="title">{title}</p>
            </div>
            <button type="button" className="edit-button" onClick={edit}>
              Edit
            </button>
          </>
        )}
        <button type="button" className="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
