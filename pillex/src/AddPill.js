//import stuff

import React from 'react';
import {View,
        Alert,
        Text, 
        TextInput,
        Button, 
        TouchableOpacity,
        StyleSheet,
        TimePickerAndroid,
        DatePickerAndroid,
        TouchableHighlight
          } from 'react-native';
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


  const openDatePicker = async()=>{
   try{
      const {action, year, month, day} = await DatePickerAndroid.open({
      // Use `new Date()` for current date.
      // May 25 2020. Month 0 is January.
      date: new Date(2020, 4, 25)
    });
    if (action !== DatePickerAndroid.dismissedAction) {
      // Selected year, month (0-11), day
    }
  } catch ({code, message}) {
    console.warn('Cannot open date picker', message);
  }
}


//creat stuff
class AddPill extends React.Component{

    constructor(props)
    {
      super(props);
    }

    state={
      name: "",
      freq: "",
      time: "",
      day: -1
    };
    
  
  

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

        var month = <View><TouchableOpacity style={{height: 20, margin: 20, backgroundColor: "ffffff"}} onPress={openDatePicker}>
        <Text>Pick Date</Text>
        </TouchableOpacity></View>;

        var none = <View></View>
        return(
            <View>
                {(this.state.freq === "daily") ? week: (this.state.freq === "weekly") ? month : none}    
            </View>
        );
    }

 

  render() {

  let data = [{
      value: 'daily',
    }, {
      value: 'weekly',
    }];
  

    return ( 
        
      <View style={styles.wholeStyle}>
        <View style={styles.viewStyles}>
         {/*} <Text style={styles.header}> PillEx</Text>*/}

                   <View>
                    <TouchableHighlight
                        style={styles.submitHead}
                        underlayColor='#fff'>
                        <Text style={styles.submitTitle}>PillEx</Text>
                    </TouchableHighlight>
                    </View>



             <TextInput
                style={styles.submitInput}
                onChangeText={(name)=>this.setState({name})}
                
                underlayColor='#fff'
                placeholder="Please enter your medication name"
                value = {this.state.name}
                />


            {/* TODO: Add Dropdown (react native selector for frequency) */}
            <View style={{width:200}} >
                <Dropdown
                  style={{width:100,}}
                  label ='Frequency'
                  data={data}
                  onChangeText={(freq)=>this.setState({freq})}
                />
            </View>


            {this.showProperContent()}


            <View style={styles.submit}>
                <Button style={styles.submitText}
                   color="#fff"
                   backgroundColor="#9FA8DA"
                    title="Add Pill"
                    onPress={this.addTodo} //sth happens when pressed
                />
            </View>
        </View>
      <View >


                    <View style={styles.submit}>
                      <Button style={styles.submitText}
                        onPress={() => this.props.switchScreen("reallanding")}
                        color="#fff"
                        backgroundColor="#9FA8DA"  
                        title="Back"
                      />
                    </View>
      



             {/* <View>
                <Button style={styles.backButton}
                title='Back'
                color='#9FA8DA'
                onPress={() => this.props.switchScreen("reallanding")}
                />
             </View> */}
        </View>
      </View>
     
    );
  }
}
  




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

  dropDown:{
    height: 100,
   width: 100,
   padding: 5,
   borderColor: "#9FA8DA",
   borderWidth: 10,
    borderRadius:100,
    width:'100%'
  },

  header:{
    marginTop: 20,
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  buttonStyles: {

    marginTop: 10,
   // marginBottom: 10,
  },
  nextButton: {
    alignItems : "flex-end",
    flex: 1
  },
  todo: {
    fontSize: 18,
    color: "black"
  },

  /*backButton:{
    width:50,
    position: 'absolute',
    marginTop:50
  }, */

  submitText: {
    color:'#fff',
    textAlign:'center',
},

submit:{
    marginRight:100,
    marginLeft:100,
    marginBottom:120,
    //marginTop:,
    paddingTop:20,
    paddingBottom:20,
   backgroundColor:'#9FA8DA',
    borderRadius:20,
    borderWidth: 2,
    borderColor: '#fff'
},

submitPill:{
  marginRight:50,
    marginLeft:50,
    marginTop:20,
   // marginBottom:10,
    paddingTop:7,
    paddingBottom:7,
    backgroundColor:'#9FA8DA',
    borderRadius:20,
    borderWidth: 2,
    borderColor: '#fff'

},

submitHead: {
  marginRight:20,
  marginLeft:20,
  marginTop:160,
  marginBottom:10,
  paddingTop:-10,
 paddingBottom:-10,
  backgroundColor:'#fff',
  borderRadius:70,
  borderWidth: 6,
  borderColor: '#9FA8DA'

},

submitTitle:{
  fontSize: 40,
  alignItems: 'center',
  justifyContent: 'center',
  color: '#9FA8DA',
  fontWeight: 'bold',
  margin: 10,
  fontFamily: 'abril-fatface',
  textAlign: 'center'
},

submitInput:{
       
  marginRight:40,
  marginLeft:40,
  marginTop:30,
  marginBottom: 29,
  paddingTop:20,
  padding: 15,
  paddingBottom:20,
  backgroundColor:'#fff',
  borderRadius:10,
  borderWidth: 4,
  borderColor: '#9FA8DA'
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

