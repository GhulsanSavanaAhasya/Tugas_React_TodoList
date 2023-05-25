import { createStore } from "redux"
import items from "./reducers/index"

const store = createStore(items)

export default store