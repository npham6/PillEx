//import stuff

import React from 'react';
import {View,
        Alert,
        Text, 
        TextInput,
        Button, 
        TouchableOpacity,
        StyleSheet,
        TimePickerAndroid} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const PILL_DESC_QUERY = gql`
    mutation Pill_Ex_DescrCreate($data: Pill_Ex_DescrCreateInput!) {
        Pill_Ex_DescrCreate(data: $data){
            Name,
            Freq,
            Time,
            Day,
            Status
        }
    }
`;

AddPill = graphql(PILL_DESC_QUERY, {
    name: 'pedCreate',
})(AddPill);


const openTimePicker = async () =>
  {
    try {
      const {action, hour, minute} = await TimePickerAndroid.open({
        hour: 14,
        minute: 0,
        is24Hour: false, // Will display '2 PM'
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        // Selected hour (0-23), minute (0-59)
      }
    } catch ({code, message}) {
      console.warn('Cannot open time picker', message);
    }
  }


//creat stuff
class AddPill extends React.Component{
  state = {
    name: "",
    freq: "",
    time: "",
    day: -1
  }

  //_showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  //_hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  addTodo = async() => {
    const { name, freq, time, day } = this.state;

    let err = null;

    try {
      await this.props.pedCreate({
        variables: {
          data: { name, freq, time, day },
        },
      });
      Alert(this.name + " has been added.");
      this.props.switchScreen('reallanding');
    } catch (e) {
      console.log(e);
      err = e;
    }

    if (!err) {
      Keyboard.dismiss();

      this.reset();
    }
  };

  showProperContent = () => {
    if(this.state.freq == "daily")
    {
        return
        (
            <View>
                <TouchableOpacity style={{height: 20, margin: 20, backgroundColor: "ffffff"}} onPress={openTimePicker}>
                <Text>Pick Time</Text>
                </TouchableOpacity>
            </View>
        );
    }
    else if(this.state.freq == "weekly")
    {
        return
        (
            <View>
                <TouchableOpacity style={{height: 20, margin: 20, backgroundColor: "ffffff"}} onPress={openTimePicker}>
                <Text>Pick Time</Text>
                </TouchableOpacity>

            </View>
        );
    }
    else{
        return(<View></View>);
    }
  }

 

  render() {
    return ( 
      <View style={styles.wholeStyle}>
      
        <View style={styles.viewStyles}>
  
            <Text style={styles.header}> PillEx</Text>

            <TextInput
                style={styles.inputStyle}
                onChangeText={(name)=>this.setState({name})}
                placeholder="Please enter your medication name"
                value = {this.state.name}
            />
            {/* TODO: Add Dropdown (react native selector for frequency) */}

            {this.showProperContent()}

            <View style={styles.buttonStyles}>
                <Button 
                    title="Add Pill"
                    color="#9FA8DA"
                    onPress={this.addTodo} //sth happens when pressed
                />
            </View>
        </View>
        <View style={{bottom: 100}}>
            <Button style={styles.backButton}
                title='Back'
                color='#9FA8DA'
                onPress={() => this.props.switchScreen("reallanding")}
            />
        </View>
      </View>
     
    )
  }
  
};



const styles = StyleSheet.create({
  wholeStyle: {
    backgroundColor: "#F3E5F5",
    height: '100%',
    flex: 1
  },
  viewStyles: {
  flex: 1, //take sas much room as you can
  marginTop: 30,
  alignItems: "center",
  justifyContent: "center",
  margin: 10, 
  backgroundColor: "#F3E5F5"
 },
 inputStyle: {
   height: 40,
   width: "95%",
   padding: 5,
   borderColor: "#9FA8DA",
   borderWidth: 1
  },
  header:{
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold'
  },
  buttonStyles: {
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  nextButton: {
    alignItems : "flex-end",
    flex: 1
  },
  todo: {
    fontSize: 18,
    color: "black"
  },
  backButton:{
    alignSelf: 'flex-end',
    marginTop: -5,
    position: 'absolute'
  }
  
});

export default AddPill;

