import { get } from 'lodash'
import { ERROR_MESSAGES } from '../../Constant'

class AxiosHttpError extends Error{
    constructor(details) {
        super(AxiosHttpError.errorCode)

        const statusCode = get(details, 'response.status', 500)

        this.details = details
        this.ts =+new Date()
        this.errorCode = 'HTTP-ERROR'
        this.statusCode = statusCode
        this.errorMessage = ERROR_MESSAGES[statusCode]
    }
}
export default AxiosHttpError