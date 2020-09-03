import React from 'react';
import {WebView} from 'react-native-webview';
import { SplashScreen } from './screens/SplashScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { MainScreen } from './screens/MainScreen';
import { Root } from 'native-base';
import { StatusBar, SafeAreaView } from 'react-native';



const navOptionHandler = (navigation) => ({
  headerShown: false
})



const MainNav = createSwitchNavigator({
  SplashScreen: SplashScreen,
  Main: { 
    screen: MainScreen,
    navigationOptions: navOptionHandler
  },

  
  })

  const AppNavigator = createAppContainer(MainNav);


export default class App extends React.Component {
  render(){
    return(
      <Root>
      <SafeAreaView style={{ flex: 1}}>
        <StatusBar barStyle="dark-content" backgroundColor="#003561"/>
        <AppNavigator/>
      </SafeAreaView>
      </Root>
    )
  }
}


