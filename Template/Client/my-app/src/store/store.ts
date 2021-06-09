import {createStore,combineReducers} from "redux"
import { userReducer } from "../reducers/reducers"

const combinedReducer=combineReducers({user:userReducer})

const store=createStore(combinedReducer )

export {store}