
import React, { Component }  from 'react';
import { StackActions, NavigationActions } from "react-navigation";
import {View, CardItem, Body, Button, Image, Text, StyleSheet, ScrollView} from 'react-native';
import { Card, Container,Content, StyleProvider, Icon } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';


export class SplashScreen extends React.Component {
    
        componentDidMount() {
            setTimeout(() => {
              this.signInToAcc();
            }, 30000);
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
                      { flex: 6, backgroundColor: '#2c85de', alignItems: "center", justifyContent: "center" }
                    }>
                    <Image source={require('../images/logo.jpg')} />
                  </View>
                </Container>
              </StyleProvider>
            );
          }
}