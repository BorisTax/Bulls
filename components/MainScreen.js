import React from 'react';
import {connect} from  'react-redux'
import {reset} from '../actions'
import {
  Button,
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import {styles} from './styles'
const MainScreen = (props) => {
  return (
            <View style={styles.mainScreenContainer}>
                <Text style={styles.mainScreenTitle}>Быки и Коровы</Text>
                <Image source={require('../images/bull.jpg')} style={styles.image}/>
                <Button title="Новая игра" onPress={()=>{props.reset();props.navigation.navigate("Game")}}/>
                {props.continueGame?<Button title="Продолжить игру" onPress={()=>{props.navigation.navigate("Game")}}/>:<></>}
                <Button title="Справка" onPress={()=>{props.navigation.navigate("Help")}}/>
            </View>
  );
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
