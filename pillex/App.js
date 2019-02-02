import React from 'react';
import {Text, View,TextInput, Image} from 'react-native';
import {Button} from 'react-native';
import {ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default class App extends React.Component{
  render(){
    return(
      <View style={styles.wholeStyle}>
        <View style={{backgroundColor: '#B2EBF2', flex:1}}>
          {/* <LinearGradient 
          colors={['(rgba(0,0,0,0.8)','transparent']}
          style={styles.gradientStyle}>
          
             <Text style={styles.header}> PillEx </Text>
            <TextInput
            style={styles.inputStyle}
            // onChangeText
            placeholder="Please enter serial number"
            /> 

          
          </LinearGradient> */}
        </View>
      </View>
    )
  }
}

const styles = {
  //gradient
    wholeStyle:{
        flex:1,
        alignItems: 'center',
        justtifyContent: 'center'
    },
    gradientStyle: {
        position:'absolute',
        left:0,
        right:0,
        top:0,
        height:0
    },

    inputStyle:{
        height: 40,
        width: "95%",
        padding: 5,
        borderColor: "#9FA8DA",
        borderWidth: 1
        
    },
    header:{
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    },

    buttonStyle:{
        padding:5,
        marginTop:10
    }

}