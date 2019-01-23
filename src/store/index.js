import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";
import conditionquery from "./reducers/conditionquery"
import statistics from "./reducers/statistics"
const reducers = combineReducers({
    conditionquery,
    statistics
})

const store = createStore(reducers, applyMiddleware(reduxPromiseMiddleware()))


export default store;