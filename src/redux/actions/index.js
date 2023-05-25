import { ADD_ITEM } from "./actionTypes"

export const addItem = (newItem) => {
    return {
        type: ADD_ITEM,
        payload: newItem,
    }
}