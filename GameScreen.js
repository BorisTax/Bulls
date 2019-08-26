import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';
import {connect} from 'react-redux'


const GameScreen = (props) => {

  return (
            <View style={styles.container}>
                <Text style={styles.title}>ИГРА</Text>
                <Text style={styles.title}>{props.name}</Text>
            </View>
  );
};

const styles = StyleSheet.create({
    image:{width:100,height:100,resizeMode:"contain"},
    container:{height:300,flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems:'center'},
    maincontainer:{flex: 1},
    title:{fontSize:30}
});

const mapStatetoProps=(store)=>{
  return {
    name:store.name
  }
}
export default connect(mapStatetoProps)(GameScreen);
