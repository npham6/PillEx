//import stuff

import React from 'react';
import {View,
        Text, 
        TextInput, 
        Button, 
        TouchableOpacity,
        ActivityIndicator,
        ScrollView,
        StyleSheet,
        TimePickerAndroid,
        FlatList} from 'react-native';
import {PillItem} from '../src/PillItem';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


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

  renderItem = ({ item: { id, name, time, day, status,  } }) => {
    return <PillItem id={id} name={name} time={time} status={status} day={day}/>;
  };

 

  render() {
    console.log(this.props.data);
    if (this.props.data.loading) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }
    return ( 
      
        <View style={styles.wholeStyle}>
      
        <View style={styles.viewStyles}>
  
            <Text style={styles.header}>PillEx</Text>
            <ScrollView style={{width: "100%"}}>
              <FlatList
                data={this.props.data.items}
                renderItem={this.renderItem}
                keyExtractor={({ id }) => id}
              />
            </ScrollView>
            <View style={styles.buttonStyles}>
                <Button 
                    title="Add Pill"
                    color="#9FA8DA"
                    onPress={() => this.props.switchScreen("addpill")} //sth happens when pressed
                />
            </View>
        
            </View>
        </View>
     
      )
  }
  
};

const PillDesc_LIST_QUERY = gql`
  query {
    pillEx_PillDescrsList(orderBy:[status_DESC, createdAt_DESC]){
      items{
        id,
        name,
        time,
        day,
        status,
        pillImage {
          downloadUrl
        }
      }
    }
  }
`;

RealLanding = graphql(PillDesc_LIST_QUERY)(RealLanding);


const styles = StyleSheet.create({
  wholeStyle: {
    backgroundColor: "#F3E5F5",
    flex: 1
  },
  viewStyles: {
  flex: 1, //take sas much room as you can
  marginTop: 30,
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
    fontWeight: 'bold',
    alignSelf: 'center'
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