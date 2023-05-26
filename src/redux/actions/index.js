import { ADD_ITEM, DEL_ITEM, EDIT_ITEM, SET_DONE, SET_EDIT, SET_ITEM, SET_TITLE } from "./actionTypes"

export const addItem = () => {
    return {
        type: ADD_ITEM,
    }
}

export const setTitle = (title) => {
    return{
        type: SET_TITLE,
        title: title,
    }
}

export const setItem = (todo) => {
    return{
        type: SET_ITEM,
        todo: todo,
    }
}

export const editItem = (todo) => {
    return{
        type: EDIT_ITEM,
        todo: todo,
    }
}

export const delItem = (todo) => {
    return {
        type: DEL_ITEM,
        todo: todo,
    }
}

export const setDone = () => {
    return {
        type: SET_DONE,
    }
}

export const setEdit = () => {
    return {
        type: SET_EDIT,
    }
}