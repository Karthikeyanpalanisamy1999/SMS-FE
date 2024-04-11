import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { REDUX_UTILITY_GENERATORS } from '../utility'
import { UIReducer } from './reducers'
// import { thunk } from 'redux-thunk'

const studentManagementStore = configureStore({
    reducer: combineReducers({
        uiState: UIReducer,
        http: combineReducers({
           
        }),
    }), // Add reducers when made
    // middleware: [thunk],
    devTools: true,
})
export default studentManagementStore
