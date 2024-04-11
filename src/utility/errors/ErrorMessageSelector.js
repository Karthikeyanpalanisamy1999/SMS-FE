import { get } from 'lodash'
import { ERROR_MESSAGES } from '../../Constant'

export function ErrorMessageSelector(error){
    if(error.response){
        const errorMessage = get(error,'response.data.message')
        if(errorMessage)
        {
            return errorMessage
        }
        const  statusMessage = ERROR_MESSAGES[get(error,'response.status')]
        if(statusMessage)
        {
            return statusMessage
        }
    }
    return error.message
}