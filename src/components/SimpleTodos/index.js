import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    todoList: initialTodosList,
    editId: [],
    addValue: '',
  }

  deleteUser = id => {
    const {todoList} = this.state
    const filterUser = todoList.filter(each => each.id !== id)
    this.setState({todoList: filterUser})
  }

  editTitle = id => {
    const {editId} = this.state
    this.setState({editId: [...editId, id]})
  }

  onChangeEditInput = (id, newTitle) => {
    const {todoList} = this.state
    this.setState({
      todoList: todoList.map(event =>
        event.id === id ? {...event, title: newTitle} : event,
      ),
    })
  }

  saveChange = id => {
    const {editId} = this.state
    this.setState({editId: editId.filter(each => each !== id)})
  }

  onChangeAddValue = event => {
    this.setState({addValue: event.target.value})
  }

  add = () => {
    const {todoList, addValue} = this.state
    if (addValue.length > 0) {
      const digit = addValue.split(' ')
      // const length = digit.length
      const giveText =
        digit[digit.length - 1] > 0
          ? digit.slice(0, digit.length - 1).join(' ')
          : addValue
      const addtimes = digit[digit.length - 1] > 0 ? digit[digit.length - 1] : 1
      // const addtimes = !isNaN(parseInt(digit[digit.length - 1]))
      //   ? parseInt(digit[length - 1])
      //   : 1
      const newObjects = []
      for (let i = 0; i < addtimes; i += 1) {
        newObjects.push({id: uuidv4(), title: giveText})
      }
      this.setState({todoList: [...todoList, ...newObjects], addValue: ''})
    }
  }

  render() {
    const {todoList, editId, addValue} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading">Simple Todos</h1>
          <div className="addInput-container">
            <input
              type="text"
              className="input"
              placeholder="Enter the text and number of times to add"
              value={addValue}
              onChange={this.onChangeAddValue}
            />
            <button type="button" className="Search-button" onClick={this.add}>
              Add
            </button>
          </div>
          <ul className="ul">
            {todoList.map(eachitem => (
              <TodoItem
                todoItem={eachitem}
                key={eachitem.id}
                deleteUser={this.deleteUser}
                editTitle={this.editTitle}
                editId={editId}
                onChangeEditInput={this.onChangeEditInput}
                saveChange={this.saveChange}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
