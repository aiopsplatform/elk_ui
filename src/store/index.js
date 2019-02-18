import { createStore, applyMiddleware, combineReducers } from "redux";
import promise from "redux-promise-middleware";
import conditionquery from "./reducers/conditionquery"
import statistics from "./reducers/statistics"
const middleware = applyMiddleware(promise)
const reducers = combineReducers({
    conditionquery,
    statistics
})

const store = createStore(reducers, middleware)


export default store;