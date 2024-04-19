// Write your code here
import './index.css'

const TodoItem = props => {
  const {text, remove} = props
  const onDelete = () => {
    remove(text.id)
  }
  return (
    <li className="itemContainer">
      <p className="text">{text.title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
