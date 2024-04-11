import { AxiosHttpError } from '../errors';

export const errorResponseInterceptor =(error)=>{
    const axiosHttpError = new AxiosHttpError(error)
    if(axiosHttpError.statusCode === 401)
    {
        setTimeout(()=>{
            localStorage.clear()
            window.location.reload()
        },500)
    }
    return Promise.reject(axiosHttpError)
}
 export const successResponseInterceptors = (response) => response