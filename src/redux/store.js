import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux"
import reducer from "./reducer.js";

const rootreducer = combineReducers({
    data:reducer
})

 const store = createStore(rootreducer)
 export default store;