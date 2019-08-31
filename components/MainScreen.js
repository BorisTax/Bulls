import React from 'react';
import {connect} from  'react-redux'
import {reset} from '../actions'
import {
  View,
  Text,
  Image
} from 'react-native';
import {styles,appTheme} from './styles'
import MyButton from './MyButton'
const MainScreen = (props) => {
  return (
            <View style={styles.mainScreenContainer}>
                <Text style={styles.mainScreenTitle}>Быки и Коровы</Text>
                <Image source={require('../images/bull.png')} style={styles.image}/>
                <MyButton title="Новая игра" customStyle={styles.newGameButton}  onPress={()=>{props.reset();props.navigation.navigate("Game")}}/>
                {props.continueGame?<MyButton title="Продолжить игру" customStyle={styles.continueGameButton} onPress={()=>{props.navigation.navigate("Game")}}/>:<></>}
                <MyButton title="Справка" customStyle={styles.helpButton} onPress={()=>{props.navigation.navigate("Help")}}/>
            </View>
  );
};
MainScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: appTheme.headerColor,
  },
};

const mapStateToProps=(store)=>{
  return {
    continueGame:store.continueGame
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    reset:()=>dispatch(reset())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MainScreen);
