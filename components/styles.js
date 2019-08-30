import {StyleSheet} from 'react-native'
export const appTheme={
  headerColor:"#00FFFF",
  bodyColor:"#BBEEEE"
}
export const styles = StyleSheet.create({
    image:{width:100,height:100,resizeMode:"contain"},
    mainScreenContainer:{height:300,flex: 1,
      backgroundColor:appTheme.bodyColor,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems:'center',width:"100%"},
      helpScreenImage:{width:100,height:100,resizeMode:"contain"},
      helpScreenContainer:{height:300,flex: 1,
        backgroundColor:appTheme.bodyColor,
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
      gameScreenContainer:{
        backgroundColor:appTheme.bodyColor,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems:'center',
      width:"100%"},
      moveContainer:{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems:'center',
      },
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
      justifyContent:"center",
      alignItems:"center",
      borderRadius:15,
      backgroundColor:"#00FFFF",
      borderColor:"blue",
      borderWidth:3,
      padding:5,
      
    },
    newGameButton:{
      backgroundColor:"#55FF55",
      color:"red"
    },
    continueGameButton:{
      backgroundColor:"yellow",
      color:"blue"
    },
    helpButton:{
      backgroundColor:"#0088FF",
      color:"white"
    }
  });