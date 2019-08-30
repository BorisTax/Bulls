import {StyleSheet} from 'react-native'
export const styles = StyleSheet.create({
    image:{width:100,height:100,resizeMode:"contain"},
    mainScreenContainer:{height:300,flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems:'center',width:"100%"},
      helpScreenImage:{width:100,height:100,resizeMode:"contain"},
      helpScreenContainer:{height:300,flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center'},
      helpScreenText:{fontSize:20},
    mainScreenTitle:{fontSize:30},
    yourStep:{fontSize:20},
    texSmall:{fontSize:15},
    textMiddle:{fontSize:20},
    textLarge:{fontSize:25},
      image:{width:100,height:100,resizeMode:"contain"},
      container:{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems:'center',
      width:"100%"},
      maincontainer:{flex: 1},
      title:{fontSize:30},
      movesTable:{
        borderWidth:1,
        flexDirection:"row",
        justifyContent:"space-around",
      },
      moves:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        borderColor:"blue",
        borderWidth:1
      },
      incorrect:{
        color:"red"
      },
      spinButton:{
        height:20,
        resizeMode:"contain",
    },
    buttons:{
      borderRadius:5
    }
  
  });