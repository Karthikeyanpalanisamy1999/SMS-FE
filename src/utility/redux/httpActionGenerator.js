const generateHttpActions =(key)=>{
    const httpActions = {
        START:`${key}:START`,
        RESET:`${key}:RESET`,
        SUCCESS:`${key}:SUCCESS`,
        ERROR:`${key}:ERROR`,
    }
    const start =()=>({
        type:httpActions.START,
        payload:null
    })
    const reset =(data)=>({
        type:httpActions.RESET,
        payload:data
    })
    const success =(data)=>({
        type:httpActions.SUCCESS,
        payload:data
    })
    const error =(errorMessage)=>({
        type:httpActions.ERROR,
        error:errorMessage
    })
    return {
        start,
        reset,
        success,
        error
    }
}
export default generateHttpActions