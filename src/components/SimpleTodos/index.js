import {Component} from 'react'
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

// Write your code here

class SimpleTodos extends Component {
  state = {newList: initialTodosList}

  onDelete = uniqueNo => {
    const {newList} = this.state

    const filteredList = newList.filter(each => each.id !== uniqueNo)

    this.setState({newList: filteredList})
  }

  render() {
    const {newList} = this.state

    return (
      <div className="bgContainer">
        <div className="innerContainer">
          <h1 className="mainHeading">Simple Todos</h1>
          <ul>
            {newList.map(each => (
              <TodoItem key={each.id} text={each} remove={this.onDelete} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
