import { connect } from "react-redux";
import {
  addItem,
  delItem,
  editItem,
  setDone,
  setEdit,
  setItem,
  setTitle,
} from "../redux/actions";
import {
  GrCheckbox,
  GrCheckboxSelected,
  GrTrash,
  GrEdit,
} from "react-icons/gr";

function TodoList({
  title,
  addItem,
  editItem,
  edit,
  setDone,
  todoList,
  setTitle,
  setItem,
  setEdit,
  delItem,
}) {
  const handleChange = (event) => {
    const title = event.target.value;
    setTitle(title);
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (title.length === 0) {
      return;
    }
    if (edit) {
      editItem();
    } else {
      addItem();
      console.log(title);
    }
  };

  const handleDone = (todo) => {
    setItem(todo);
    setDone();
  };

  const handleDel = (todo) => {
    setItem(todo);
    delItem();
  };

  const handleEdit = (todo) => {
    setTitle(todo.value);
    setEdit();
    setItem(todo);
  };

  // console.log(todoList);

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

      {todoList &&
        todoList.map((todo) => {
          return (
            <div key={todo.id} className="wrapper-list">
              <div className="card-list">
                <div onClick={() => handleDone(todo)}>
                  {!todo.isDone && <GrCheckbox></GrCheckbox>}
                  {todo.isDone && <GrCheckboxSelected></GrCheckboxSelected>}
                </div>
                <span
                  style={{
                    textDecoration: todo.isDone ? "line-through" : "none",
                  }}
                >
                  {todo.value}
                </span>
                <div className="btn-list">
                  <div className="btn-edit" onClick={() => handleEdit(todo)}>
                    <GrEdit></GrEdit>
                  </div>
                  <div className="btn-del" onClick={() => handleDel(todo)}>
                    <GrTrash></GrTrash>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    edit: state.edit,
    title: state.title,
    todoList: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: () => dispatch(addItem()),
    editItem: () => dispatch(editItem()),
    setItem: (todo) => dispatch(setItem(todo)),
    setTitle: (title) => dispatch(setTitle(title)),
    delItem: (todo) => dispatch(delItem(todo)),
    setDone: () => dispatch(setDone()),
    setEdit: () => dispatch(setEdit()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
