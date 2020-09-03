
import React, { Component }  from 'react';
import { StackActions, NavigationActions } from "react-navigation";
import {View, CardItem, Body, Button, Image, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import { Card, Container,Content, StyleProvider, Icon } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';


export class SplashScreen extends React.Component {
    
        componentDidMount() {
            setTimeout(() => {
              this.signInToAcc();
            }, 3000);
          }
        
          async signInToAcc() {
            const { navigate } = this.props.navigation;
            const resetAction = StackActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({ routeName: "Main" })]
            });
            this.props.navigation.dispatch(resetAction);
            navigate("Main");
          }
        
          render() {
            return (
              <StyleProvider style={getTheme(material)}>
                <Container>
                  <View
                    style={
                      { flex: 1, backgroundColor: '#003561', alignItems: "center", justifyContent: "center" }
                    }>
                    <Image source={require('../images/logo.jpg')} style={{ marginHorizontal: 30, width: '80%' , height: 50}} />
                  </View>
                  <View style={{flex: 1, backgroundColor: '#003561', alignItems: "center", justifyContent: "center"}} >
                      <Text style={{ color: "white", fontSize: 16}}>Email: info@autotrack.ng</Text>
                      <Text style={{ color: "white", fontSize: 16}}>Phone: 07043434620, 09083999339</Text>
                  </View>
                </Container>
              </StyleProvider>
            );
          }
}