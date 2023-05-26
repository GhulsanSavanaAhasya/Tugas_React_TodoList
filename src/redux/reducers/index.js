import { ADD_ITEM, EDIT_ITEM, SET_ITEM, SET_TITLE } from "../actions/actionTypes"

const initialState = {
    todos: [],
    title: "",
    todo: "",
}

const indexReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_ITEM:
            const newTodo = {
                id: Date.now(),
                value: state.title,
                isDone: false,
            }
        return {
            ...state,
            todos: state.todos.concat(newTodo),
            title: "",
        }
        case SET_TITLE:
            return {
                ...state,
                title: action.title,
            }
        
        case SET_ITEM:
            return {
                ...state,
                todo: action.todo,
            }
        case EDIT_ITEM:
            var newList = [...state.todos]
            var index = newTodo.indexOf(state.todo)
            if(index !== -1){
                newList[index].value = state.title
                return{
                    ...state,
                    title: "",
                    edit: false,
                    todos: newTodo,
                }
            }else {
                return{
                    ...state
                }
            }
        default:
            return state
    }
}

export default indexReducer