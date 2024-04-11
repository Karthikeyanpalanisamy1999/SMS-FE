import { cloneDeep, get, update } from 'lodash'
import StatePersistance from './statePersistance'

class PreferenceReducer {
    _storeName = null

    _initialState = null

    constructor(storeName) {
        this._storeName = storeName
    }

    get getStoreName() {
        return this._storeName
    }

    get initialState() {
        return this._initialState
    }

    set initialState(initialStateValue) {
        this._initialState = initialStateValue
    }

    generator() {
        const statePersistance = new StatePersistance(this.getStoreName)
        statePersistance.initialState = this._initialState
        statePersistance.clearExpiredState()
        return (
            currentState = statePersistance.getStoreState(),
            action = {}
        ) => {
            const preferencesConfigMap = get(
                currentState,
                'preferencesConfigMap'
            )
            const type = get(action, 'preferencesConfig.type')
            const value = get(action, 'preferencesConfig.value')

            const newPreferencesConfigMap = update(
                cloneDeep(preferencesConfigMap),
                type,
                () => value
            )

            const newPreferenceState = {
                ...currentState,
                preferencesConfigMap: newPreferencesConfigMap,
            }
            statePersistance.setNewState(newPreferenceState)
            return newPreferenceState
        }
    }
}

export default PreferenceReducer
