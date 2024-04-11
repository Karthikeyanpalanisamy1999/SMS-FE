export const httpHashCompare = (previousPayload,nextPayload) =>
  previousPayload.PayloadHash === nextPayload.PayloadHash

export const jsonCompare = (previousPayload,nextPayload)=>{
    const previousStringValue = JSON.stringify({Payload:previousPayload})
    const nextStringValue = JSON.stringify({Payload:nextPayload})

    return previousStringValue === nextStringValue
}