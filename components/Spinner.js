import React from 'react'
import {View,TouchableOpacity,Text,StyleSheet,Image} from 'react-native'
import {styles} from './styles'
export const Spinner = (props) => {
    return (
              <View style={{flexDirection:"column",justifyContent:"flex-start",alignItems:"center"}}>
                  
                  <TouchableOpacity style={styles.spinButton} onPress={()=>{props.onChange(props.index,props.value==props.max?0:props.value+1)}}>
                      <Image source={require('../images/arrowup.png')}/>
                      </TouchableOpacity>
                      <View>
                  <Text style={{fontFamily:"monospace",fontSize:30}}>{props.value}</Text>
                  </View>
                  <TouchableOpacity style={styles.spinButton} onPress={()=>{props.onChange(props.index,props.value==0?props.max:props.value-1)}}>
                  <Image source={require('../images/arrowdown.png')}/>
                      </TouchableOpacity>
              </View>
    );
  };