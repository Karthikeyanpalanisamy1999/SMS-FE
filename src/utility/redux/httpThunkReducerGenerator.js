import { get } from 'lodash'
import generateHash from './hasher'

const HTTP_INITIAL_STATE = {
    payload: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null,
    payloadHash: null,
    updatedAt: +new Date(),
}

const generateHttpReducer = (key) => {
    const httpActions = {
        START: `${key}: START`,
        RESET: `${key}: RESET`,
        SUCCESS: `${key}: SUCCESS`,
        ERROR: `${key}: ERROR`,
    }

    const reducer = (storeState = HTTP_INITIAL_STATE, action = {}) => {
        switch (action.type) {
            case httpActions.RESET:
                return HTTP_INITIAL_STATE
            case httpActions.SUCCESS:
                const successData = {
                    ...storeState,
                    payload: get(action, 'payload'),
                    isLoading: false,
                    isSuccess: true,
                    isError: false,
                    error: null,
                    payloadHash: null,
                    updatedAt: +new Date(),
                    isBackgroundLoading: false,
                }
                successData.payloadHash = generateHash(
                    JSON.stringify(successData)
                )
                return successData
            case httpActions.ERROR:
                const errorData = {
                    ...storeState,
                    payload: null,
                    isLoading: false,
                    isSuccess: false,
                    isError: true,
                    error: get(action, 'error'),
                    payloadHash: 'error',
                    updatedAt: +new Date(),
                    isBackgroundLoading: false,
                }
                return errorData
            case httpActions.START:
                const startData = {
                    ...storeState,
                    payload: null,
                    isLoading: true,
                    isSuccess: false,
                    isError: false,
                    error: null,
                    payloadHash: null,
                    updatedAt: +new Date(),
                    isBackgroundLoading: true,
                }
                return startData
            default:
                return storeState
        }
    }

    return reducer
}

export default generateHttpReducer
