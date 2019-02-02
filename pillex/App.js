import React from 'react';
import {StyleSheet, Text, View,TextInput, Image, ActivityIndicator, Alert} from 'react-native';
import {Button} from 'react-native';
import {LinearGradient} from 'expo';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { EightBaseAppProvider, AuthContext } from '@8base/app-provider';
import { ReactNativeAuth0AuthClient } from '@8base/react-native-auth0-auth-client';
import { ApiTokenAuthClient } from '@8base/api-token-auth-client';


const AUTH0_CLIENT_ID = 'qGHZVu5CxY5klivm28OPLjopvsYp0baD';
const AUTH0_DOMAIN = 'https://auth.8base.com';

const authClient = new ReactNativeAuth0AuthClient({
  clientId: AUTH0_CLIENT_ID,
  domain: AUTH0_DOMAIN,
});

// const authClient = new ApiTokenAuthClient({
//   apiToken: '00b82100-c1b9-48bc-adda-f602dc5beab6',
// });

const stringifySourceLocation = (sourceLocation = {}) => `line: ${sourceLocation.line}, column: ${sourceLocation.column}`;

const Test_QUERY = gql`
  query {
      todo(id: "cjrn2sqlm000j01q92fue1b98"){
        title
      }
    }
`;

class Main extends React.Component {
  constructor(props) {
    super(props);

    
  }

  render() {
    const { data } = this.props;
    console.log('props', this.props);
    
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
          
          /> 
          <View style={styles.buttonStyles}>
            <Button 
              title="Search"
              color="#9FA8DA"
            />
          </View>
      </View>
  );
  }

}

const withTestData = graphql(Test_QUERY);

Main = withTestData(Main);

export default class App extends React.Component{
  
  constructor(props) {
    super(props);
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
      <EightBaseAppProvider
        authClient={authClient}
        uri="https://api.8base.com/cjrk68sk8000901p1p2o1f8nh"
        onRequestError={this.handleRequestError}
      >
      
        {({ loading }) => {
          if (loading) {
            return <ActivityIndicator />;
          }
          return(<Main />);
      }}
      </EightBaseAppProvider>
    )
  }
}

const styles = StyleSheet.create({
  //gradient
    wholeStyle:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
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
    }

});

