/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  Button,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';



const GameScreen = () => {
  return (
            <View style={styles.container}>
                <Text style={styles.title}>Игра "Быки и Коровы"</Text>
                <Text style={styles.title}>Версия 0.1</Text>
                <Text style={styles.title}>Автор Тахмазов Борис</Text>
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
    title:{fontSize:30,borderWidth:1}
});

export default GameScreen;
