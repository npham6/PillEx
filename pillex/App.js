import React from 'react';
import {Text, View,TextInput, Image} from 'react-native';
import {Button} from 'react-native';
import {ImageBackground} from 'react-native';
import {LinearGradient} from 'expo';

import { EightBaseAppProvider, AuthContext } from '@8base/app-provider';
import { ReactNativeAuth0AuthClient } from '@8base/react-native-auth0-auth-client';

const AUTH0_CLIENT_ID = 'qGHZVu5CxY5klivm28OPLjopvsYp0baD';
const AUTH0_DOMAIN = 'https://auth.8base.com';

const authClient = new ReactNativeAuth0AuthClient({
  clientId: AUTH0_CLIENT_ID,
  domain: AUTH0_DOMAIN,
});

export default class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {}
  }

  render(){
    return(
<<<<<<< HEAD
      <EightBaseAppProvider
        authClient={authClient}
        uri="https://api.8base.com/cjrk68sk8000901p1p2o1f8nh"
      >
        <View style={styles.wholeStyle}>
          <View style={{backgroundColor: '#B2EBF2', flex:1}}>
            <Text>hi</Text>
          </View>
        </View>
      </EightBaseAppProvider>
=======
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
>>>>>>> bb08f612dce81eeeeebd121d422414c96296cd5e
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