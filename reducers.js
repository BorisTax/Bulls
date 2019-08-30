import {resetNumbersSet, bullsCows, isLegal} from './utils'
import { RESET, START, FILTER_NUMBERS, NEXT_MOVE, SET_PLAYER_PREV_NUMBER,SET_COMP_PREV_NUMBER, COMP_WINS, PLAYER_WINS } from './actions';
const numbers=resetNumbersSet()
const initialState={numbers,moves:0,playerMoves:[],compMoves:[],continueGame:false,
compNumber:"",playerTurn:true,gameStep:0,playerPrevNumber:"0123",compGuessNumber:"",compWins:false,playerWins:false}
export const mainReducer=(state=initialState,action)=>{
    switch(action.type){
        case RESET:
            return {...initialState,playerMoves:[],compMoves:[],numbers:resetNumbersSet()}
        case START:
            do{
                var n=""+Math.trunc(Math.random()*10000)
                if(n.length===3)n="0"+n
            }while(!isLegal(n))
            return {...state,compNumber:n,continueGame:true}
        case NEXT_MOVE:
            return {...state,playerTurn:!state.playerTurn,gameStep:(state.gameStep+1)%3}
        case COMP_WINS:
            return {...state,compWins:true}
        case PLAYER_WINS:
            return {...state,playerWins:true}
        case SET_PLAYER_PREV_NUMBER:
            return {...state,playerPrevNumber:action.data}
        case SET_COMP_PREV_NUMBER:
            return {...state,compGuessNumber:action.data}
        case FILTER_NUMBERS:
            const {number,bulls,cows}=action.data
            const newNumbers=state.numbers.filter(item=>{
                if(item===number)return false
                const bc=bullsCows(item,number)
                if(bc.bulls==bulls&bc.cows==cows) return true
                return false
            })
            return {...state,numbers:newNumbers}
        default:
         return state   
    }
}