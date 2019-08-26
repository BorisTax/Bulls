export const RESET="RESET"
export const START="START"
export const NEXT_MOVE="NEXT_MOVE"
export const FILTER_NUMBERS="FILTER_NUMBERS"
export const reset=()=>({type:RESET})
export const start=()=>({type:START})
export const nextMove=()=>({type:NEXT_MOVE})
export const filterNumbers=(number,bulls,cows)=>({type:FILTER_NUMBERS,data:{number,bulls,cows}})
