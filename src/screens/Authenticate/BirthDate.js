// React Native Date Picker – To Pick the Date using Native Calendar
// https://aboutreact.com/react-native-datepicker/

// import React in our code
import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';

//import DatePicker from the package we installed
import DatePicker from 'react-native-datepicker';

const BirthDate = () => {
  const [date, setDate] = useState(new Date())

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Birth Date
        </Text>
        <DatePicker
          style={styles.datePickerStyle}
          date={date} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-1940"
          maxDate="29-09-2021"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
            borderWidth:1,
            backgroundColor:'white',
            color:'white',
              marginLeft: 0,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default BirthDate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color:'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    right: 140
  },
  datePickerStyle: {
    borderColor:'blue',
    width: 320,
    marginLeft:-40,
    marginTop: 20,
  },
});