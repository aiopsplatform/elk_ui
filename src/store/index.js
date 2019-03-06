import { createStore, applyMiddleware, combineReducers } from "redux";
import promise from "redux-promise-middleware";
import query from "./reducers/query"
import statistics from "./reducers/statistics"
const middleware = applyMiddleware(promise)
const reducers = combineReducers({
    query,
    statistics
})

const store = createStore(reducers, middleware)


export default store;