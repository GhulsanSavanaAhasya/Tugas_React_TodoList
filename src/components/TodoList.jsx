function TodoList(){
    return(
        <>
        <div className="container">
            <div className="wrapper">
            <h1>Todo List App</h1>
                <form>
                    <input type="text" placeholder="Input Your Todo Here!" required />
                    <button className="btn-add">Add Todo</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default TodoList