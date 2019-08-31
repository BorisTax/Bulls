import React from 'react'
import {View,TouchableOpacity,Text,StyleSheet,Image} from 'react-native'
import {styles} from './styles'
export const Spinner = (props) => {
    return (
              <View style={{flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch"}}>
                  
                  <TouchableOpacity style={styles.spinButton} onPress={()=>{props.onChange(props.index,props.value==props.max?0:props.value+1)}}>
                      <Image style={styles.imageFit} source={require('../images/arrowup.png')}/>
                      </TouchableOpacity>
                      <View>
                  <Text style={styles.spinText}>{props.value}</Text>
                  </View>
                  <TouchableOpacity style={styles.spinButton} onPress={()=>{props.onChange(props.index,props.value==0?props.max:props.value-1)}}>
                  <Image style={styles.imageFit} source={require('../images/arrowdown.png')}/>
                      </TouchableOpacity>
              </View>
    );
  };
