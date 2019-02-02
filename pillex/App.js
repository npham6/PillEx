import React from 'react';
import {Text, View,TextInput, Image} from 'react-native';
import {Button} from 'react-native';
import {ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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