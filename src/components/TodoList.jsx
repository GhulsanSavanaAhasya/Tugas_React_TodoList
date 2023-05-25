import { useState } from "react"
import { useDispatch } from "react-redux"
import { addItem } from "../redux/actions/index"

function TodoList(){
    const dispatch = useDispatch()
    const [addInputList, setInputList] = useState("")

    const handleClick = (e) => {
        e.preventDefault()

        let newItem = {
            id: Date.now(),
            title: addInputList,
            completed: false,
        }
        dispatch(addItem(newItem))
        console.log(addInputList)

        setInputList("")
    }

    return (
      <>
        <div className="container-input">
          <div className="wrapper">
            <h1>Todo List App</h1>
            <form onSubmit={handleClick}>
              <input
                type="text"
                value={addInputList}
                onChange={(e) => setInputList(e.target.value)}
                placeholder="Input Your Todo Here!"
                required
              />
              <button className="btn-add">Add Todo</button>
            </form>
          </div>
        </div>

      </>
    );
}

export default TodoList