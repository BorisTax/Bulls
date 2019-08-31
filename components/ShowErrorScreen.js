import React,{useState} from 'react';
import {connect} from  'react-redux'
import {View,Text,ScrollView,Dimensions} from 'react-native';
import {styles,appTheme} from './styles'
import MyButton from './MyButton'
import SpinnerGroup from './SpinnerGroup'
import { isLegal, bullsCows } from '../utils';
const ShowErrorScreen = (props) => {
  const [state,setState]=useState({number:"1234",correct:true})
  const onChange=(value)=>{
    const correct=isLegal(value)
    setState({number:value,correct})
  }
  const onPress=()=>{
    if(!isLegal(state.number)) return
    props.compMoves.forEach(item => {
      const {bulls,cows}=bullsCows(state.number,item.number)
      if(bulls==item.bulls&&cows==item.cows)item.error=false;else {item.error=true;item.bullsTrue=bulls;item.cowsTrue=cows}
    });
    setState({...state})
  }
  const width=Dimensions.get('window').width
  const height=Dimensions.get('window').height
  return (
            <View style={styles.mainScreenContainer}>
                <Text style={styles.textMiddle}>Введите загаданное вами число</Text>
                <SpinnerGroup count={4} max={9} init={state.number} onChange={onChange}/>
                {state.correct===false?<Text style={styles.incorrect}>Неправильный ввод</Text>:<></>}
                <MyButton title="Найти ошибки в ответах" onPress={onPress}/>
                <View style={styles.movesTable}>
                    <View style={{ ...styles.moves, width}}>
                      <Text style={{ ...styles.textMiddle, alignSelf: "center" }}>Мои ходы и ваши ответы</Text>
                      <ScrollView>
                        {props.compMoves.map((item, index) => <View key={index} style={{flexDirection:"row"}}>
                            <Text style={{...styles.textSmall}}>{item.number} - </Text>
                            <Text style={{...styles.textSmall,color:item.error===true?"red":"black"}}>{`Б:${item.bulls}, К:${item.cows}${item.error?' - (должно быть Б:'+item.bullsTrue+', К:'+item.cowsTrue+')':item.error!==undefined?' - правильно':""}`}</Text>
                            </View>
                            )}
                      </ScrollView>
                    </View>
                  </View>
                </View>
  );
};
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
