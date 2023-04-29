import {combineReducers, legacy_createStore as createStore} from "redux";
import customersReducer from "./customers-reducer";

let reducers = combineReducers({
    customersData: customersReducer
})
let store = createStore(reducers);
export default store;