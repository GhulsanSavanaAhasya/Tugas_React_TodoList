import { ADD_ITEM, EDIT_ITEM, SET_ITEM, SET_TITLE } from "./actionTypes"

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

export const setItem = (item) => {
    return{
        type: SET_ITEM,
        item: item,
    }
}

export const editItem = (item) => {
    return{
        type: EDIT_ITEM,
        item: item,
    }
}