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
import {Dropdown} from 'react-native-material-dropdown';




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
    constructor(props)
    {
      super(props);
    }
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
      Alert.alert(this.state.name + " has been added.");
      this.props.switchScreen('reallanding');
    } catch (e) {
      console.log(e);
      err = e;
    }
  }

  
  showProperContent = () => {
      var week = <View><TouchableOpacity style={{height: 20, margin: 20, backgroundColor: "ffffff"}} onPress={openTimePicker}>
      <Text>Pick Time</Text>
      </TouchableOpacity></View>;

        var month = <View><TouchableOpacity style={{height: 20, margin: 20, backgroundColor: "ffffff"}} onPress={openTimePicker}>
        <Text>Pick Time</Text>
        </TouchableOpacity></View>;

        var none = <View></View>
        return(
            <View>
                {(this.state.freq === "daily") ? week: (this.state.freq === "weekly") ? month : none}    
            </View>
        );
    }
    // else if(this.state.freq === "weekly")
    // {
    //     return
    //     (
    //         <View>
    //             <TouchableOpacity style={{height: 20, margin: 20, backgroundColor: "ffffff"}} onPress={openTimePicker}>
    //             <Text>Pick Time</Text>
    //             </TouchableOpacity>

    //         </View>
    //     );
    // }
    // else{
    //     return(<View></View>);
    // }
 

  render() {
      console.log(this.state.freq);
    let data = [{
        value: 'weekly',
      }, {
        value: 'daily',
      }, {
        value: 'Pear',
      }];
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
            <View style={{width: 200}}>
            <Dropdown
                label='Favorite Fruit'
                data={data}
                style={{width: 100,}}
                onChangeText={(freq)=>this.setState({freq})}
            />
            </View>

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
const PILL_DESC_QUERY = gql`
    mutation pillEx_PillDescrCreate($data: PillEx_PillDescrCreateInput!) {
        pillEx_PillDescrCreate(data: $data){
            name,
            freq,
            time,
            day,
            status
        }
    }
`;

AddPill = graphql(PILL_DESC_QUERY, {
    name: 'pedCreate',
})(AddPill);

export default AddPill;

