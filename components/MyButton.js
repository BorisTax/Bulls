import React from 'react';
import {Text,View} from 'react-native';
import {styles} from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';


const MyButton = (props) => {
  const customStyle=props.customStyle?props.customStyle:{}
  return (
                <TouchableOpacity onPress={props.onPress}>
                  <View style={{...styles.buttons,...customStyle}}>
                <Text style={{...styles.textMiddle,color:customStyle.color}}>{props.title}</Text>
                </View>
                </TouchableOpacity>  
  );
};


export default MyButton;
