import React from 'react';
import MainScreen from './components/MainScreen'
import GameScreen from './components/GameScreen'
import HelpScreen from './components/HelpScreen'
import {createStore} from 'redux'
import {mainReducer} from './reducers'
import {Provider} from 'react-redux';
import {createAppContainer, createStackNavigator} from 'react-navigation'
const Stack=createStackNavigator({
      Main: {screen: MainScreen},
      Game: {screen: GameScreen},
      Help: {screen: HelpScreen}
    },
    {
      initialRootName:"Main"
    })
const store=createStore(mainReducer)
const AppContainer = createAppContainer(Stack)
const App=()=>{
   return <Provider store={store}><AppContainer/></Provider>
 }
export default App;
