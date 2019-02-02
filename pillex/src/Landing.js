import React from 'react';
import {StyleSheet, View,Text,TextInput} from 'react-native';
import {Button} from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


class Landing extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            serial_num:"2016-05-15"
        }
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
        return(
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.viewStyle}>
                    <Text style={styles.titleStyle}> PillEx </Text>
        
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
        color: 'white',
        fontWeight: 'bold',
        margin: 10,

    },

    buttonStyle:{
        padding:5,
        marginTop:10
    }
});

// Main = withTestData(Main);

export default Landing;
