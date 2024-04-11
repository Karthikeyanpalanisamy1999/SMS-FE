
const generateHash = (string)=>{
    let hash = 0
    if(string.length === 0) return hash
    for(let index = 0; index < string.length; index +=1){
        const chr = string.charCodeAt(index)
        hash = (hash << 5) - hash + chr
        hash |= 0
    }
    return hash
}
export const generateDateHash =(string)=>{
    const currentTimeString = new Date().toString()
    const hash = generateHash(currentTimeString + string)
    return hash
}

export default generateHash