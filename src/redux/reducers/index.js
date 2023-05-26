import { ADD_ITEM, EDIT_ITEM, SET_ITEM, SET_TITLE, SET_DONE, SET_EDIT, DEL_ITEM } from "../actions/actionTypes"

const initialState = {
    todos: [],
    title: "",
    todo: "",
    edit: false,
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
            var index = newList.indexOf(state.todo)
            if(index !== -1){
                newList[index].value = state.title
                return{
                    ...state,
                    title: "",
                    edit: false,
                    todos: newList,
                }
            }else {
                return{
                    ...state
                }
            }
        case SET_DONE:
            newList = [...state.todos]
            index = newList.indexOf(state.todo)
            if(index !== -1){
                newList[index].isDone = !state.todo.isDone
                return{
                    ...state,
                    todos: newList,
                }
            }else {
                return{
                    ...state
                }
            }
        case SET_EDIT:
            return {
                ...state,
                edit: true,
            }
        case DEL_ITEM:
            newList = [...state.todos]
            index = newList.indexOf(state.todo)
            if(index !== -1){
                newList.splice(index, 1)
                return{
                    ...state,
                    todos: newList,
                }
            } else {
                return {
                    state,
                }
            }
        default:
            return state
    }
}

export default indexReducer