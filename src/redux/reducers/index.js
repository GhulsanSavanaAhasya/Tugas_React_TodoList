import { ADD_ITEM } from "../actions/actionTypes"

const initialState = {
    todos: [],
}

const indexReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_ITEM:
            return{
                ...state,
                todos: [...state.todos, action.payload],
            }
        default:
            return state
    }
}

export default indexReducer