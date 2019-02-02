import React from 'react';
import {View,Text,TextInput} from 'react-native';
import {Button} from 'react-native';



class Landing extends React.Component{

    constructor(props){
        super(props)
        this.state = {date:"2016-05-15"}
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
                        onPress={() => this.props.switchScreen("login")}
                    />
                </View>
            </View>
        )
    }
}


const styles ={


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
}

export default Landing;
