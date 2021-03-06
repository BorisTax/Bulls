import React from 'react'
import {View,Button,Text} from 'react-native'
import {Spinner} from './Spinner'
import {styles} from './styles'
export default class SpinnerGroup extends React.Component{
    constructor(props){
        super(props)
        this.state={number:props.init}
    }
    onChange=(i,value)=>{
        let newNumber=this.state.number.split("")
        newNumber[i]=value
        newNumber=newNumber.join("")
        this.props.onChange(newNumber)
        this.setState({number:newNumber})
        }
    render(){
    const spinners=this.state.number.split("").map((item,index)=><Spinner key={index} index={index} value={+item} onChange={this.onChange.bind(this)} max={this.props.max}/>)
    return (
                <View style={{flexDirection:"row"}}>
                    {spinners}
                    </View>
    );
    }
  };