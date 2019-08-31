import React, {useState} from 'react';
import {View,Text,Dimensions} from 'react-native';
import {connect} from 'react-redux'
import {start, nextMove, filterNumbers, setPlayerPrevNumber,setcompGuessNumber, setCompWins, setPlayerWins} from '../actions'
import {isLegal, bullsCows} from '../utils'
import SpinnerGroup from './SpinnerGroup';
import { ScrollView } from 'react-native-gesture-handler';
import {styles,appTheme} from './styles'
import MyButton from './MyButton';

class GameView extends React.Component{
  constructor(props){
    super(props)
    this.state={playerNumber:props.playerPrevNumber,bulls:0,cows:0,correct:true,...props}
  }
  check=()=>{
    if (isLegal(this.state.playerNumber)===false) {this.setState({correct:false});
                    return
                  }
    const {bulls,cows}=bullsCows(this.state.playerNumber,this.props.compNumber)
    this.state.playerMoves.push({number:this.state.playerNumber,bulls,cows})
    this.props.nextMove()
    this.props.setPlayerPrevNumber(this.state.playerNumber)
    this.setState({bulls,cows})
    if(this.state.bulls==4) this.props.setPlayerWins()
  }
  compMove=()=>{
    const n=this.props.numbers.length
    const k=Math.trunc(Math.random()*n)
    //this.setState({compNumber:this.props.numbers[k]})
    this.props.setcompGuessNumber(this.props.numbers[k])
    this.props.nextMove()
    this.setState({bulls:0,cows:0})
  }
  answer=()=>{
    if((this.state.bulls+this.state.cows)>4) return
    this.props.filterNumbers(this.props.compGuessNumber,this.state.bulls,this.state.cows)
    this.props.compMoves.push({number:this.props.compGuessNumber,bulls:this.state.bulls,cows:this.state.cows})
    this.props.nextMove()
    if(this.state.bulls==4) this.props.setCompWins()
  }
  render(){
    const width=Dimensions.get('window').width
    const height=Dimensions.get('window').height
  const correct=!isLegal(this.state.playerNumber)?<Text style={styles.incorrect}>Неправильный ввод</Text>:<Text></Text>
  let move;
  switch(this.props.gameStep){
    case 0:
      move=<View style={styles.moveContainer}>
      <Text style={styles.textMiddle}>Ваш ход</Text>
        <SpinnerGroup count={4} max={9} init={this.props.playerPrevNumber} onChange={(value)=>{this.setState({playerNumber:value})}}/>
        {correct}
        <MyButton title="Проверить" onPress={this.check.bind(this)}/> 
        <Text></Text>
        </View>
      break;
    case 1:
      move=<View style={styles.moveContainer}>
        <Text style={styles.textMiddle}>Ваш ход</Text>
        <Text style={styles.textMiddle}>{this.state.playerNumber}</Text>
        <Text style={styles.textMiddle}>{`быков: ${this.state.bulls}, коров: ${this.state.cows}`}</Text>
        <MyButton title="Далее" onPress={this.compMove.bind(this)}/> 
        </View>
        break;
    case 2:
      move=<View style={styles.moveContainer}>
        <Text style={styles.textMiddle}>Мой ход</Text>
        <Text style={styles.textMiddle}>{`Вы загадали число ${this.props.compGuessNumber}?`}</Text>
        <View style={{flexDirection:"row",alignItems:"center"}}>
          <Text>Быков</Text>
          <SpinnerGroup count={2} max={4} init={"00"} onChange={(value)=>{this.setState({bulls:+value[0],cows:+value[1]})}}/>
          <Text>Коров</Text>
        </View>
        {(this.state.bulls+this.state.cows)>4?<Text style={styles.incorrect}>Неправильный ввод</Text>:<></>}
        <MyButton title="Ответ" onPress={this.answer.bind(this)}/> 
        </View>
        break;
    case 3:
        break;
    case 4:
        break;
    default:
  }
  if(this.props.numbers.length===0) move=<View style={{justifyContent:"center",alignItems:"center"}}>
                   <Text style={{...styles.textLarge,...styles.textCenter}}>Извините, но вы где-то ошиблись :(</Text>
                   <MyButton title="Найти ошибку" onPress={()=>{this.props.navigation.navigate("Mistakes")}}/>
                </View>
  if(this.props.compWins) move=<View style={{justifyContent:"center",alignItems:"center"}}>
  <Text style={styles.textLarge}>УРА! Я победил :)</Text>
  <Text style={styles.textSmall}>А мое число было {this.props.compNumber}</Text>
</View>
if(this.props.playerWins) move=<View style={{justifyContent:"center",alignItems:"center"}}>
<Text style={styles.textLarge}>Вы угадали! :)</Text>
</View>
  return <View style={{flex:1,width:width,flexDirection:"column"}}>
          {move}
           <View style={styles.movesTable}>
            <View style={{...styles.moves,width:width/2}}>
              <Text style={{...styles.textMiddle,alignSelf:"center"}}>Ваши ходы</Text>
             <ScrollView>
              {this.state.playerMoves.map((item,index)=><Text style={styles.textSmall} key={index}>{`${item.number} - Б:${item.bulls}, К:${item.cows}`}</Text>)}
              </ScrollView>         
            </View>
            <View style={{...styles.moves,width:width/2}}>
            <Text style={{...styles.textMiddle,alignSelf:"center"}}>Мои ходы</Text>
            <ScrollView>
            {this.state.compMoves.map((item,index)=><Text style={styles.textSmall} key={index}>{`${item.number} - Б:${item.bulls}, К:${item.cows}`}</Text>)}
            </ScrollView>
            </View>
          </View>
  </View>
  }
}

const GameScreen = (props) => {
  
  const start=props.continueGame===false?
          <View style={{flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start",width:"80%"}}>
          <Text style={styles.text}>Загадайте четырехзначное число с неповторяющимися цифрами. (Варианты типа 0123 тоже подходят)</Text>
          <MyButton title="Загадал" customStyle={{alignSelf:"center"}} onPress={()=>{props.start()}}/>
          </View>:<View><GameView {...props}/></View>
  return (
            <View style={styles.gameScreenContainer}>
                {start}
            </View>
  );
};
GameScreen.navigationOptions = {
  title:"В главное меню",
  headerStyle: {
    backgroundColor: appTheme.headerColor,
    
  },
};


const mapStatetoProps=(store)=>{
  return {
    ...store
  }
}
const mapDispatchtoProps=(dispatch)=>{
  return {
    start:()=>dispatch(start()),
    nextMove:()=>dispatch(nextMove()),
    filterNumbers:(number,bulls,cows)=>dispatch(filterNumbers(number,bulls,cows)),
    setPlayerPrevNumber:(n)=>dispatch(setPlayerPrevNumber(n)),
    setcompGuessNumber:(n)=>dispatch(setcompGuessNumber(n)),
    setCompWins:()=>dispatch(setCompWins()),
    setPlayerWins:()=>dispatch(setPlayerWins())
  }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(GameScreen);
