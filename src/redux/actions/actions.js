import { INCREMENT, DECREMENT, RESET } from "../constants/constants"

//actions creators
export const increment=(data)=>{
    return {
        type:INCREMENT,
        payload:data
    }
}

export const decrement=(data)=>{
    return {
        type:DECREMENT,
        payload:data
    }
}

export const reset=()=>{
    return {
        type:RESET
        
    }
}