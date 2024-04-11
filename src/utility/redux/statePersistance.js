import generateHash from './hasher'

class StatePersistance {
    constructor(statePrefix) {
        this._statePrefix = statePrefix
    }

    set initialState(initialState) {
        this._initialState = initialState
        this._stateHash = generateHash(JSON.stringify(initialState))
        this._stateKey = `${this._statePrefix}-${this._stateHash}`
    }

    get initialState() {
        return this._initialState
    }

    clearExpiredState() {
        const statePrefix = this._statePrefix
        const stateKey = this._stateKey

        Object.keys(localStorage)
            .filter((key) => key.startsWith(statePrefix))
            .forEach((key) => {
                if (key !== stateKey) localStorage.removeItem(key)
            })
    }

    getStoreState() {
        let storedState
        try {
            const stateString = localStorage.getItem(this._stateKey)
            storedState = stateString
                ? JSON.parse(stateString)
                : this._initialState
        } catch (error) {
            storedState = this._initialState
        }
        return storedState
    }

    setNewState(newState) {
        setTimeout(() => {
            localStorage.setItem(this._stateKey, JSON.stringify(newState))
        }, 1000)
    }
}

export default StatePersistance
