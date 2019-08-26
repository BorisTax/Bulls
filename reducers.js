import {resetNumbersSet} from './utils'
import { RESET } from './actions';
const numbers=resetNumbersSet()
const initialState={numbers,moves:0,playerMoves:[],compMoves:[],continueGame:false,
compNumber:0}
export const mainReducer=(state=initialState,action)=>{
    switch(action.type){
        case RESET:
            return {numbers:resetNumbersSet(),moves:0,playerMoves:[],compMoves:[]}
        default:
         return state   
    }
}