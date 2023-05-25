import { ADD_ITEM } from "../actions/actionTypes"

const initialState = {
    todos: [],
}

const items = (state = initialState, action) => {
    switch(action.type){
        case ADD_ITEM:
            return{
                ...state,
                todos: [...state.todos, action.payload],
            }
    }
}

export default items