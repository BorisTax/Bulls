import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Text
} from 'react-native';
import {connect} from 'react-redux'
import {start, nextMove, filterNumbers} from './actions'
import {isLegal, bullsCows} from './utils'


class GameView extends React.Component{
  constructor(props){
    super(props)
    this.state={text:"",comp:{moved:false},correct:true,...props}
  }
  check=()=>{
    if (isLegal(this.state.text)===false) {this.setState({correct:false});
                    return
                  }
    const {bulls,cows}=bullsCows(this.state.text,this.props.compNumber)
    this.state.playerMoves.push(`${this.state.text} - ${bulls} быков, ${cows} коров`)
    this.props.nextMove()
  }
  compMove=()=>{
    const n=this.props.numbers.length
    const k=Math.round(Math.random()*n)
    this.setState({comp:{numberIndex:k,number:this.props.numbers[k],moved:true}})
  }
  answer=()=>{
    this.props.filterNumbers(this.state.comp.number,this.state.bulls,this.state.cows)
    this.props.compMoves.push(`${this.state.comp.number} - ${this.state.bulls} быков, ${this.state.cows} коров`)
    this.props.nextMove()
  }
  render(){
  const correct=!this.state.correct?<Text style={styles.incorrect}>Неправильный ввод</Text>:<></>
  const move=this.props.playerTurn===true?<View>
                              <Text>Ваш ход</Text>
                              <TextInput
                                style={{height: 40}}
                                placeholder="Введите число"
                                onChangeText={(text) => this.setState({text:text})}
                                value={this.state.text}
                                  />
                              <Button title="Проверить" onPress={this.check.bind(this)}/> 
                              {correct} 
                              </View>
                              :<View>
                                 {this.state.comp.moved===false?<Button title="Ход компьютера" onPress={this.compMove.bind(this)}/>:
                                    <View>
                                      <Text>{`Вы загадали число ${this.state.comp.number}?`}</Text>
                                      <TextInput style={{height: 40,width:40}} onChangeText={(text) => this.setState({bulls:text})}/><Text>быков</Text>
                                      <TextInput style={{height: 40,width:40}} onChangeText={(text) => this.setState({cows:text})}/><Text>коров</Text>
                                      <Button title="Ответ" onPress={()=>{this.answer()}}/>
                                    </View>}
                              </View>
  return <View>
          {move}
          <View style={styles.movesTable}>
            <View style={styles.moves}>
              {this.state.playerMoves.map((item,index)=><Text key={index}>{item}</Text>)}
            </View>
            <View style={styles.moves}>
            {this.state.compMoves.map((item,index)=><Text key={index}>{item}</Text>)}
            </View>
          </View>
  </View>
  }
}

const GameScreen = (props) => {
  const start=props.continueGame===false?
          <View>
          <Text>Загадайте четырехзначное число с неповторяющимися цифрами. (0123 тоже подходит)</Text>
          <Button title="Загадал" onPress={()=>{props.start()}}/>
          </View>:<View><GameView {...props}/></View>
  return (
            <View style={styles.container}>
                {start}
            </View>
  );
};

const styles = StyleSheet.create({
    image:{width:100,height:100,resizeMode:"contain"},
    container:{height:300,flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems:'center'},
    maincontainer:{flex: 1},
    title:{fontSize:30},
    movesTable:{
      flex:1,
      flexDirection:"row",
    },
    moves:{
      flex:1,
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
