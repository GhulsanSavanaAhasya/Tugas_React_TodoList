import { createStore } from "redux"
import indexReducer from "./reducers/index"

const store = createStore(indexReducer)

export default store