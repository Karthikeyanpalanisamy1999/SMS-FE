import { cloneDeep,get,isNil, } from "lodash";
import { useSelector } from 'react-redux'
import { httpHashCompare } from "../httpComparator";

const useThunSelector =( apikey,payloadPath = null,defaultValue = null)=>{
    const ERROR_STATE={
        payload:null,
        isLoading:false,
        isSuccess:false,
        isError:true,
        error:{
            errorMessage:'Invalid store selector used'
        },
        payloadHash:null,
        updateat:+new Date()
    }
    const responsePayload = useSelector((currentState)=>{
        const response = get(currentState,`http.${apikey}`,ERROR_STATE)

        if(!isNil(payloadPath)&& !isNil(response.payload)) {
            const pathValue = get(response.payload,payloadPath,defaultValue)
            return {...response,payload: cloneDeep(pathValue)}
        }
        return response
    },httpHashCompare)
    return responsePayload
}

export default useThunSelector