//import stuff

import React from 'react';
import {View,
        Text, 
        TextInput, 
        Button, 
        TouchableOpacity,
        StyleSheet,
        TimePickerAndroid} from 'react-native';
import {PillItem} from '../src/PillItem';
import DateTimePicker from 'react-native-modal-datetime-picker';



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
class RealLanding extends React.Component{

  constructor(props)
  {
      super(props);
  }
  state = {
    todo: [],
    isDateTimePickerVisible: false,
    pillTime: "",
    pillName: "",
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker();
  };

  addTodo = () => {
    var newTodo = this.state.text;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({todo: arr, text: ""});

  }
  deleteTodo = (t) =>{
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    arr.splice(pos,1);
    this.setState({todo: arr});
  }

  

 
  renderTodos = () =>{
    return this.state.todo.map(t=>{
      return (
        <TouchableOpacity key={t}>
        <Text 
        style={styles.todo}
        onPress={()=>{this.deleteTodo(t)}}
        >{t}</Text>
        </TouchableOpacity>
      )
    })

  }

 

  render() {
    return ( 
        <View style={styles.wholeStyle}>
      
        <View style={styles.viewStyles}>
  
            <Text style={styles.header}> PillEx</Text>

            <TextInput
            style={styles.inputStyle}
            onChangeText={(pillName)=>this.setState({pillName})}
            placeholder="Please enter your medication name"
            value = {this.state.text}
            />

            {/* <TouchableOpacity style={{height: 20, margin: 20, backgroundColor: "ffffff"}}onPress={this._showDateTimePicker}>
                <Text>Pick Date</Text>
            </TouchableOpacity>
            <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this._handleDatePicked}
                onCancel={this._hideDateTimePicker}
            /> */}
            <TouchableOpacity style={{height: 20, margin: 20, backgroundColor: "ffffff"}} onPress={openTimePicker}>
                <Text>Pick Time</Text>
            </TouchableOpacity>
            <View style={styles.buttonStyles}>
                <Button 
                    title="Add Todo"
                    color="#9FA8DA"
                    onPress={() => this.props.switchScreen("addpill")} //sth happens when pressed
                />
            </View>
            <View style={{marginTop: 10}}/>
            {this.renderTodos()}
                <Button style={styles.backButton}
                title='Back'
                color='#9FA8DA'
                onPress={() => this.props.switchScreen("landing")}

                />
        
            </View>
        </View>
     
      )
  }
  
};



const styles = StyleSheet.create({
  wholeStyle: {
    backgroundColor: "#F3E5F5",
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
    marginTop: 10
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

export default RealLanding;