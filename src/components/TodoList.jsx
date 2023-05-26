import { connect } from "react-redux"
import { addItem, editItem, setTitle } from "../redux/actions";

function TodoList({
  title,
  addItem,
  editItem,
  edit,
  setTitle,
  todoList,
}) {
  const handleChange = (event) => {
    const title = event.target.value;
    setTitle(title)
  };

  const handleClick = (event) => {
    event.preventDefault()
    if (title.length === 0) {
      return;
    }
    if (edit) {
      editItem();
    } else {
      addItem();
      console.log(title);
    }
  }

  console.log(todoList)

  return (
    <>
      <div className="container-input">
        <div className="wrapper">
          <h1>Todo List App</h1>
          <form>
            <input
              type="text"
              onChange={handleChange}
              value={title}
              placeholder="Input Your Todo Here!"
            />
            <button className="btn-add" onClick={handleClick}>
              {edit ? "Edit Todo" : "Add Todo"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    edit: state.edit,
    title: state.title,
    todoList: state.todos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: () => dispatch(addItem()),
    editItem: () => dispatch(editItem()),
    setItem: (item) => dispatch(setItem(item)),
    setTitle: (title) => dispatch(setTitle(title)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)