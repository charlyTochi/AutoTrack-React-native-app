import React from 'react';
import {WebView} from 'react-native-webview';


export class MainScreen extends React.Component {

    render(){
    return(
    <WebView
        source={{
          uri: 'http://monitor.autotrack.ng/authentication/create'
        }}
        style={{ marginTop: 20 }}
      />
      
    )
    }
}


