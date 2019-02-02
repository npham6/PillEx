import React from 'react';
import {Text, View,TextInput, Image} from 'react-native';
import {Button} from 'react-native';
import {ImageBackground} from 'react-native';
import {LinearGradient} from 'expo';


export default class App extends React.Component{
  render(){
    return(
      <View style={styles.wholeStyle}>
        
          <LinearGradient 
          colors={['rgba(238,174,202,1)','rgba(148,187,233,1)']}
          start={[0,0]}
          end={[1,1]}
          location={[0,1]}
          style={styles.gradientStyle}/>
          
              <Text style={styles.header}> PillEx </Text>
            <TextInput
            style={styles.inputStyle}
            placeholder="Please enter serial number"
            /> 
            <View style={styles.buttonStyles}>
          <Button 
            title="Search"
            color="#9FA8DA"
          />
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
        justtifyContent: 'center',
        color: 'white',
        fontWeight: 'bold'
    },

    buttonStyle:{
        padding:5,
        marginTop:10
    }

}