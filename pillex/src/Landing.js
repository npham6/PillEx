import React from 'react';
import {StyleSheet, View,Text,TextInput} from 'react-native';
import {Button} from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import {Font} from 'expo';



class Landing extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            serial_num:"2016-05-15"
        }
    }
    componentDidMount(){
    //    Font.loadAsync({
      //      'abril-fat-face': require('./assets/AbrilFatface-Regular.ttf')
        //})
    }

    render(){
        return(
            <View >
                <View style={styles.viewStyle}>
                
                    <View style={{marginTop: 90, justifyContent:'center', alignItems: 'center'}}><Text style={styles.titleStyle}> PillEx </Text></View>
        
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Please enter serial number"
                    />        
                    
 
                    <Button 
                        title='Sign In'
                        color="#9FA8DA"
                        style={styles.buttonStyle}
                        onPress={() => this.props.switchScreen("reallanding")}
                    />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    inputStyle:{
       height: 40,
       borderColor:"white",
       borderWidth:1,
       padding:5,
       margin: 10,
       marginTop: 50,
       borderRadius: 50,
       width: '95%',
       backgroundColor: 'white',
       color: '#9FA8DA',
       
        
    },
    viewStyle:{
        justifyContent: 'center',
        margin: 10
    },

    titleStyle:{
        fontSize: 50,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        marginTop: 50,
        width: 'auto',
//        fontFamily: 'abril-fat-face'

    },

    buttonStyle:{
        padding:5,
        marginTop:80
    }
});

// Main = withTestData(Main);

export default Landing;
