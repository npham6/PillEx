import React from 'react';
import {Text, StyleSheet, View,TextInput, Image, ActivityIndicator, Alert, Button, Platform, KeyboardAvoidingView} from 'react-native';
import Landing from './src/Landing';
import Login from './src/Login';
import AddPill from './src/AddPill';
import RealLanding from './src/RealLanding';
import {LinearGradient} from 'expo';


import { EightBaseAppProvider, AuthContext } from '@8base/app-provider';
import { ReactNativeAuth0AuthClient } from '@8base/react-native-auth0-auth-client';
import { ApiTokenAuthClient } from '@8base/api-token-auth-client';


const AUTH0_CLIENT_ID = 'qGHZVu5CxY5klivm28OPLjopvsYp0baD';
const AUTH0_DOMAIN = 'https://auth.8base.com';

const authClient = new ReactNativeAuth0AuthClient({
  clientId: AUTH0_CLIENT_ID,
  domain: AUTH0_DOMAIN,
});

const stringifySourceLocation = (sourceLocation = {}) => `line: ${sourceLocation.line}, column: ${sourceLocation.column}`;

export default class App extends React.Component{
  
  constructor(props){
    super(props);
  }
  state = {
    currentScreen: "landing",
    userID: null,
  }
  switchScreen = (currentScreen)=> {
    this.setState({currentScreen});
  }

  setUserID = (userID) => {
    this.setState({userID});
  }

  getUserID = () => {
    return this.state.userID;
  }

  renderScreen = () =>{
    if(this.state.currentScreen === "landing"){
      return(
        <Landing switchScreen={this.switchScreen} j/>
      )
    }

    else if (this.state.currentScreen === "login" ){
      return(
        <Login switchScreen={this.switchScreen} />
      )
    }

    else if (this.state.currentScreen === "reallanding" ) {
      return (<RealLanding switchScreen={this.switchScreen} />)
    }
    else if (this.state.currentScreen === "addpill" ) {
      return (<AddPill switchScreen={this.switchScreen} />)
    }
  }

  handleRequestError = ({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message = '', locations = [], path = '' }) => {
        Alert.alert(
          'GraphQL error',
          `Message: ${message}
          Location: ${locations.map(stringifySourceLocation)}
          Path: ${path}
          `,
        );
      });

    if (networkError) {
      Alert.alert(
        'Network error',
        `[Network error]: ${networkError}`,
      );
    }
  };

  render(){
    return(
      <View style={styles.wholeStyle}>
      
      <LinearGradient 
        colors={['rgba(238,174,202,1)','rgba(148,187,233,1)']}
        start={[0,0]}
        end={[1,1]}
        location={[0,1]}
        style={styles.gradientStyle}
      /> 
      
      <EightBaseAppProvider
        authClient={authClient}
        uri="https://api.8base.com/cjrk68sk8000901p1p2o1f8nh"
        onRequestError={this.handleRequestError}
      >
      
      
      
        {({ loading }) => {
          if (loading) {
            return <ActivityIndicator />;
          }
          return(this.renderScreen());
      }}
      </EightBaseAppProvider>
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  //gradient
  wholeStyle:{
    flex:1,
    marginTop: Platform.OS === "android" ? 24 : 0
  },
  gradientStyle: {
    backgroundColor: 'rgb(148,187,233)',
    position:'absolute',
    left:0,
    right:0,
    top:0,
    height:'100%'
  },

  inputStyle:{
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header:{
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold'
  },

  buttonStyle:{
    padding:5,
    marginTop:10
  },
});