import React,{useState} from 'react';
import {connect} from  'react-redux'
import {reset} from '../actions'
import {View,Text,ScrollView,Dimensions} from 'react-native';
import {styles,appTheme} from './styles'
import MyButton from './MyButton'
import SpinnerGroup from './SpinnerGroup'
import { isLegal, bullsCows } from '../utils';
class ShowErrorScreen extends React.Component {
  constructor(props){
    super(props)
    this.state={number:"0123",correct:true}
  }
  //const [state,setState]=useState({number:"0123",correct:true})
  onChange=(value)=>{
    const correct=isLegal(value)
    this.setState({number:value,correct})
  }
  onPress=()=>{
    if(!isLegal(this.state.number)) return
    this.props.compMoves.forEach(item => {
      const {bulls,cows}=bullsCows(state.number,item.number)
      if(bulls==item.bulls&&cows==item.cows)item.error=false;else item.error==true
    });
  }

  render(){
    const width=Dimensions.get('window').width
    const height=Dimensions.get('window').height
    const numbers=this.props.compMoves.map((item, index) => <Text style={{...styles.textSmall,color:item.error===true?"red":"black"}} key={index}>{item.number}</Text>)
    const answers=this.props.compMoves.map((item, index) => <Text style={{...styles.textSmall,color:item.error===true?"red":"black"}} key={index}>{`Б:${item.bulls}, К:${item.cows}${item.error?' - ошибка':''}`}</Text>)
  return (
            <View style={styles.mainScreenContainer}>
                <Text style={styles.textMiddle}>Введите загаданное вами число</Text>
                <SpinnerGroup count={4} max={9} init={'0123'} onChange={this.onChange.bind(this)}/>
                {this.state.correct?<Text style={styles.incorrect}>Неправильный ввод</Text>:<Text></Text>}
                <MyButton title="Найти ошибку" customStyle={styles.newGameButton}  onPress={this.onPress.bind(this)}/>
                <View style={styles.movesTable}>
                    <View style={{ ...styles.moves, width: width / 2 }}>
                      <Text style={{ ...styles.textMiddle, alignSelf: "center" }}>Мои ходы</Text>
                      <ScrollView>
                        {numbers}
                      </ScrollView>
                    </View>
                    <View style={{ ...styles.moves, width: width / 2 }}>
                      <Text style={{ ...styles.textMiddle, alignSelf: "center" }}>Ваши ответы</Text>
                      <ScrollView>
                        {answers}
                      </ScrollView>
                    </View>
                  </View>
                </View>
  );
};
}

ShowErrorScreen.navigationOptions = {
  title:"Назад",
  headerStyle: {
    backgroundColor: appTheme.headerColor,
  },
};

const mapStateToProps=(store)=>{
  return {
    ...store
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ShowErrorScreen);
