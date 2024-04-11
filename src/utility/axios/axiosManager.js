import { axios } from "axios";
import {
    successRequestInterceptors,
    errorRequestInterceptor
} from './requestInterceptors'
import {
    successResponseInterceptors,
    errorResponseInterceptor
} from './responseInterceptors'

const setupAxios =()=>{
    if(axios.interceptors.request.handlers.length === 0)
    {
        axios.interceptors.request.use(
            successRequestInterceptors,
            errorRequestInterceptor
        )
        axios.interceptors.response.use(
            successResponseInterceptors,
            errorResponseInterceptor
        )
    }
}
export default setupAxios