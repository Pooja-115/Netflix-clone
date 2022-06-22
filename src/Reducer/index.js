import { combineReducers } from 'react-redux'
import { handleAdd } from './HandleAdd'
const RootReducer = combineReducers(handleAdd)
export default RootReducer
