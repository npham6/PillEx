import React from 'react';
import {StyleSheet, View,Text,TextInput, ActivityIndicator} from 'react-native';
import {Button} from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import {Font} from 'expo';


class Landing extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            serial_num:"2016-05-15",
            isReady: false
        }
    }

    async componentDidMount() {
        await Font.loadAsync({'abril-fatface': require('../assets/AbrilFatface-Regular.ttf')});
        this.setState({isReady: true});
    }

    onAddSerial = async () => {
        const {serial_num} = this.state;
        try {
            await this.props.todoCreate({
              variables: {
                data: { title },
              },
            });
          } catch (e) {
            console.log(e);
            err = e;
          }
      
          if (!err) {
            Keyboard.dismiss();
      
            this.reset();
          }
    }

    render(){
        if(!this.state.isReady){
            return <ActivityIndicator/>
        }
        return(
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.viewStyle}>
                    <View style={{backgroundColor:'white', borderRadius: 50}}><Text style={styles.titleStyle}> PillEx </Text></View>
        
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Please enter serial number"
                    />         
                    <Button 
                        marginTop= '10'
                        title='search'
                        color="#9FA8DA"
                        style={styles.buttonStyle}
                        onPress={() => this.props.switchScreen("reallanding")}
                    />
                </View>
            </View>
        )
    }
}


const GQL_QUERY = gql`
  query {
    todo(id: "cjrn2sqlm000j01q92fue1b98"){
      title
    }
  }
`;


const styles = StyleSheet.create({
    inputStyle:{
       height: 40,
       borderColor:"white",
       borderWidth:1,
       padding:5,
       margin: 10,
        
    },
    viewStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },

    titleStyle:{
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#9FA8DA',
        fontWeight: 'bold',
        margin: 10,
        fontFamily: 'abril-fatface',

    },

    buttonStyle:{
        padding:5,
        marginTop:10
    }
});

// Main = withTestData(Main);

export default Landing;
