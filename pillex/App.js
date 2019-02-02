import React from 'react';
import {Text, View,TextInput, Image, Platform} from 'react-native';
import Landing from './src/Landing';
import Login from './src/Login';
import {LinearGradient} from 'expo';

export default class App extends React.Component{
  constructor(props){
    super(props);
  }
  state = {
    currentScreen: "landing"
  }
  switchScreen = (currentScreen)=> {
    this.setState({currentScreen});
  }

  renderScreen = () =>{
    if(this.state.currentScreen === "landing"){
      return(
        <Landing switchScreen={this.switchScreen}/>
      )
    }

    else if (this.state.currentScreen === "login" ){
      return(
        <Login switchScreen={this.switchScreen} />
      )
    }
  }
  
    render(){
    return(
      <View style={styles.wholeStyle}>
        <LinearGradient 
          colors={['rgba(238,174,202,1)','rgba(148,187,233,1)']}
          start={[0,0]}
          end={[1,1]}
          location={[0,1]}
          style={styles.gradientStyle}/>
          {this.renderScreen()}
      </View>
    );
  }
}

const styles = {
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
}