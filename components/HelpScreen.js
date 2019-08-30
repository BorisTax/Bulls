/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{useState} from 'react';
import {
  Button,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';
import {styles} from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';


const GameScreen = () => {
  const [rules,showRules]=useState(false)
  return (
            <View style={styles.helpScreenContainer}>
                <Text style={styles.helpScreenText}>Игра "Быки и Коровы"</Text>
                <Text style={styles.helpScreenText}>Версия 0.1</Text>
                <Text style={styles.helpScreenText}>Автор Тахмазов Борис</Text>
                {rules?<Text style={styles.textSmall}>Игроки загадывают четырехзначное число с различными цифрами и по очереди угадывают число соперника. 
                          Игрок называет любое четырехзначное число, соперник дает ответ в виде n-быков, m-коров.
                          Кол-во быков означает кол-во совпадающих цифр, которые есть у названного и загаданного числа и которые находятся на одинаковых местах.
                          Кол-во коров означает кол-во совпадающих цифр, которые есть у названного и загаданного числа, но которые находятся на разных местах.
                          Ответ в виде 4 быка означает, что число угадано.
                          Побеждает тот, кто первым угадет число соперника.</Text>:<></>}
                <TouchableOpacity onPress={()=>{showRules(!rules)}}>
                {rules?<Text style={styles.textMiddle}>Скрыть правила</Text>:<Text style={styles.textMiddle}>Показать правила</Text>}
                </TouchableOpacity>  
            </View>
  );
};


export default GameScreen;
