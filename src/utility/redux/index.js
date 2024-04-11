import generateHttpActions from './httpActionGenerator'
import generateHttpReducer from './httpThunkReducerGenerator'
import PreferenceReducer from './preferenceReducerGenerator'

const REDUX_UTILITY_GENERATORS = {
    generateHttpActions,
    generateHttpReducer,
}
export { REDUX_UTILITY_GENERATORS, PreferenceReducer }
