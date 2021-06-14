import {createStore,combineReducers} from "redux"
import { movieReducer, userReducer } from "../reducers/reducers"

const combinedReducer=combineReducers({user:userReducer,movies:movieReducer})

const store=createStore(combinedReducer)

export {store}