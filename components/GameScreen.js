import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Text
} from 'react-native';
import {connect} from 'react-redux'
import {start, nextMove, filterNumbers} from '../actions'
import {isLegal, bullsCows} from '../utils'
import { SpinnerGroup } from './SpinnerGroup';


class GameView extends React.Component{
  constructor(props){
    super(props)
    this.state={playerNumber:"",correct:true,...props}
  }
  check=()=>{
    if (isLegal(this.state.playerNumber)===false) {this.setState({correct:false});
                    return
                  }
    const {bulls,cows}=bullsCows(this.state.playerNumber,this.props.compNumber)
    this.state.playerMoves.push(`${this.state.playerNumber} - быков: ${bulls}, коров: ${cows}`)
    this.props.nextMove()
    this.setState({bulls,cows})
  }
  compMove=()=>{
    const n=this.props.numbers.length
    const k=Math.round(Math.random()*n)
    this.setState({comp:{numberIndex:k,number:this.props.numbers[k],moved:true}})
    this.props.nextMove()
  }
  answer=()=>{
    this.props.filterNumbers(this.state.comp.number,this.state.bulls,this.state.cows)
    this.props.compMoves.push(`${this.state.compNumber} - быков: ${this.state.bulls}, коров: ${this.state.cows}`)
    this.props.nextMove()
  }
  render(){
  const correct=!this.state.correct?<Text style={styles.incorrect}>Неправильный ввод</Text>:<></>
  let move;
  switch(this.props.gameStep){
    case 0:
      move=<View style={styles.container}>
      <Text style={styles.yourStep}>Ваш ход</Text>
        <SpinnerGroup count={4} max={9} onChange={(value)=>{this.setState({playerNumber:value})}}/>
        <Button title="Проверить" onPress={this.check.bind(this)}/> 
        {correct}
        </View>
      break;
    case 1:
      move=<View style={styles.container}>
        <Text style={styles.yourStep}>Ваш ход</Text>
        <Text style={styles.text}>{this.state.playerNumber}</Text>
        <Text style={styles.text}>{`быков: ${this.state.bulls} , коров: ${this.state.cows}`}</Text>
        <Button title="Далее" onPress={this.compMove.bind(this)}/> 
        </View>
        break;
    case 2:
      move=<View style={styles.container}>
        <Text style={styles.yourStep}>Мой ход</Text>
        <Text style={styles.text}>{`Вы загадали число ${this.state.comp.number}?`}</Text>
        <SpinnerGroup count={2} max={4} onChange={(value)=>{this.setState({bulls:+value[0],cows:+value[1]})}}/>
        <Button title="Ответ" onPress={this.answer.bind(this)}/> 
        </View>
        break;
    case 3:
        break;
    case 4:
        break;
    default:
  }
  return <View style={{flex:1,flexDirection:"column"}}>
          {move}
           <View style={styles.movesTable}>
            <View style={styles.moves}>
              <Text style={{alignSelf:"center"}}>Ваши ходы</Text>
              {this.state.playerMoves.map((item,index)=><Text key={index}>{item}</Text>)}
            </View>
            <View style={styles.moves}>
            <Text style={{alignSelf:"center"}}>Мои ходы</Text>
            {this.state.compMoves.map((item,index)=><Text key={index}>{item}</Text>)}
            </View>
          </View>
  </View>
  }
}

const GameScreen = (props) => {
  const start=props.continueGame===false?
          <View>
          <Text style={styles.text}>Загадайте четырехзначное число с неповторяющимися цифрами. (Варианты типа 0123 тоже подходят)</Text>
          <Button title="Загадал" onPress={()=>{props.start()}}/>
          </View>:<View><GameView {...props}/></View>
  return (
            <View style={styles.container}>
                {start}
            </View>
  );
};

const styles = StyleSheet.create({
  yourStep:{fontSize:20},
  text:{fontSize:15},
    image:{width:100,height:100,resizeMode:"contain"},
    container:{
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems:'center'},
    maincontainer:{flex: 1},
    title:{fontSize:30},
    movesTable:{
      borderWidth:1,
      flexDirection:"row",
      justifyContent:"space-between"
    },
    moves:{
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"flex-start",
      borderColor:"blue",
      borderWidth:1,
    },
    incorrect:{
      color:"red"
    }

});

const mapStatetoProps=(store)=>{
  return {
    ...store
  }
}
const mapDispatchtoProps=(dispatch)=>{
  return {
    start:()=>dispatch(start()),
    nextMove:()=>dispatch(nextMove()),
    filterNumbers:(number,bulls,cows)=>dispatch(filterNumbers(number,bulls,cows))
  }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(GameScreen);
