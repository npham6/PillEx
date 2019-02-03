'use strict';

var React = require('react-native');

var FloatingLabel = require('react-native-floating-labels');

var {
  AppRegistry,
  StyleSheet,
  View,
} = React;

class form extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      dirty: false,
    };
  }

  onBlur() {
    console.log('#####: onBlur');
  }

  render() {
    return (
      <View style={styles.container}>
        <FloatingLabel 
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            style={styles.formInput}
            value='john@email.com'
            onBlur={this.onBlur}
          >Email</FloatingLabel>
        <FloatingLabel 
            labelStyle={styles.labelInput}
            inputStyle={styles.input}

            style={styles.formInput}
          >First Name</FloatingLabel>
        <FloatingLabel
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            style={styles.formInput}
          >Last Name</FloatingLabel>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 65,
    backgroundColor: 'white',
  },
  labelInput: {
    color: '#673AB7',
  },
  formInput: {    
    borderBottomWidth: 1.5, 
    marginLeft: 20,
    borderColor: '#333',       
  },
  input: {
    borderWidth: 0
  }
});

AppRegistry.registerComponent('form', () => form);
