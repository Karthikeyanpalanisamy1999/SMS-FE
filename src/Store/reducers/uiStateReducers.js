import INITIAL_STATE from './initialUIState'
import { PreferenceReducer } from '../../utility'

const uiPreferenceReducer = (() => {
    const generatePreferenceReducer = new PreferenceReducer('uiState')
    generatePreferenceReducer.initialState = INITIAL_STATE
    return generatePreferenceReducer.generator()
})()
export default uiPreferenceReducer
