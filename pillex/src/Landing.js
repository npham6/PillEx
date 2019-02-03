import React from 'react';
import {StyleSheet, View,Text,TextInput, ActivityIndicator, TouchableHighlight} from 'react-native';
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
            <View >
                <View style={styles.viewStyle}>
                
                   {/* <View style={{marginTop: 150, backgroundColor:'white', borderRadius: 300, justifyContent:'center', alignItems: 'center'}}><Text style={styles.titleStyle}> PillEx </Text></View>*/}
                    
                    <View>
                    <TouchableHighlight
                        style={styles.submitHead}
                        underlayColor='#fff'>
                        <Text style={styles.submitTitle}>PillEx</Text>
                    </TouchableHighlight>
                    </View>




                    <TextInput
                        style={styles.submitInput}
                        placeholder="UserID"
                    />  
                           
                    
                    <View>
                    <TouchableHighlight
                        style={styles.submit}
                        //onPress={() => this.submitSuggestion(this.props)}
                        onPress={() => this.props.switchScreen("reallanding")}
                        underlayColor='#fff'>
                        <Text style={styles.submitText}>Sign In</Text>
                    </TouchableHighlight>
                    </View>




 
                   {/* <Button 
                        style={styles.buttonStyle}
                        title='Sign In'
                        color="#9FA8DA"
                        
                        onPress={() => this.props.switchScreen("reallanding")}
                   />*/}
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    submitHead:{
        marginRight:20,
        marginLeft:20,
        marginTop:180,
        marginBottom:10,
        paddingTop:-10,
       paddingBottom:-10,
        backgroundColor:'#fff',
        borderRadius:70,
        borderWidth: 6,
        borderColor: '#9FA8DA'
    },




    submitInput:{
       
        marginRight:40,
        marginLeft:40,
        marginTop:80,
        marginBottom: 10,
        paddingTop:20,
        padding: 15,
        paddingBottom:20,
        backgroundColor:'#fff',
        borderRadius:10,
        borderWidth: 4,
        borderColor: '#9FA8DA'
       
       
       
        /*height: 40,
       borderColor:"white",
       borderWidth:1,
       padding:5,
       margin: 10,
       marginTop: 30,
       borderRadius: 50,
       width: '95%',
       backgroundColor: 'white',
       color: '#9FA8DA',*/
       
        
    },
    viewStyle:{
        justifyContent: 'center',
        margin: 10
    },

    submitTitle:{
        fontSize: 60,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#9FA8DA',
        fontWeight: 'bold',
       margin: 10,
        fontFamily: 'abril-fatface',
       // borderRadius: 10,
       // marginRight:20,
        //marginLeft:20,
       // marginTop:10,
       // marginBottom:20,
        textAlign:'center',
    },

    submitText: {
        color:'#fff',
        textAlign:'center',
    },

    submit:{
        marginRight:40,
        marginLeft:40,
        marginTop:20,
        marginBottom:10,
        paddingTop:20,
        paddingBottom:20,
       backgroundColor:'#9FA8DA',
        borderRadius:10,
        borderWidth: 2,
        borderColor: '#fff'
    }

   /* buttonStyle:{
        borderRadius: 50,
        width: '95%',
        padding:5,
        marginTop:80,
        borderWidth:1,
    }*/
});

// Main = withTestData(Main);

export default Landing;
