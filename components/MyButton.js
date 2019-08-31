import React from 'react';
import {Text,View} from 'react-native';
import {styles} from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';


const MyButton = (props) => {
  const customStyle=props.customStyle?props.customStyle:{}
  return (
                  <View style={{...styles.buttons,...customStyle}}>
                    <TouchableOpacity onPress={props.onPress}>
                    <Text style={{...styles.textMiddle,color:customStyle.color}}>{props.title}</Text>
                    </TouchableOpacity> 
                </View>
                 
  );
};


export default MyButton;
