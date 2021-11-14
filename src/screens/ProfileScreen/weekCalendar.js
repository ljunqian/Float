import React from 'react';
import { View, Text } from 'react-native';
import WeekView, { createFixedWeekDate } from 'react-native-week-view';
import 'dayjs/locale/en-sg';
import { color } from '../../styles/theme';

/* Week View can only show 1|3|5|7 days in a week */

const myEvents = [
  {
    id: 1,
    description: 'Event',
    startDate: new Date(2021, 10, 8, 23, 30),
    endDate: new Date(2021, 10, 9, 9, 0),
    color: 'transparent',
    // ... more properties if needed,
  },
  {
    id: 2,
    description: 'Event',
    startDate: new Date(2021, 10, 10, 1, 0),
    endDate: new Date(2021, 10, 10, 8, 30),
    color: 'transparent',
    // ... more properties if needed,
  },
  {
    id: 3,
    description: 'Event',
    startDate: new Date(2021, 10, 11, 0, 0),
    endDate: new Date(2021, 10, 11, 7, 0),
    color: 'transparent',
    // ... more properties if needed,
  },
  {
    id: 4,
    description: 'Event',
    startDate: new Date(2021, 10, 12, 0, 30),
    endDate: new Date(2021, 10, 12, 8, 0),
    color: 'transparent',
    // ... more properties if needed,
  },
  {
    id: 5,
    description: 'Event',
    startDate: new Date(2021, 10, 12, 23, 50),
    endDate: new Date(2021, 10, 13, 7, 30),
    color: 'transparent',
    // ... more properties if needed,
  },
  {
    id: 6,
    description: 'Event',
    startDate: new Date(2021, 10, 14, 0, 50),
    endDate: new Date(2021, 10, 14, 8, 10),
    color: 'transparent',
    // ... more properties if needed,
  },
  {
    id: 7,
    description: 'Event',
    startDate: new Date(2021, 10, 15, 0, 20),
    endDate: new Date(2021, 10, 15, 8, 20),
    color: 'transparent',
    // ... more properties if needed,
  },{
    id: 8,
    description: 'Event',
    startDate: new Date(2021, 10, 5, 23, 30),
    endDate: new Date(2021, 10, 6, 9, 0),
    color: 'transparent',
    // ... more properties if needed,
  },
  {
    id: 9,
    description: 'Event',
    startDate: new Date(2021, 10, 7, 1, 0),
    endDate: new Date(2021, 10, 7, 8, 30),
    color: 'transparent',
    // ... more properties if needed,
  },
  {
    id: 10,
    description: 'Event',
    startDate: new Date(2021, 10, 8, 0, 0),
    endDate: new Date(2021, 10, 8, 7, 0),
    color: 'transparent',
    // ... more properties if needed,
  },
];

const myHeader = {
    backgroundColor: '',
    color: '',
    borderColor: 'white',
}

const MyEventComponent = ({ event, position }) => (
  <View style={{padding: 5, backgroundColor: color.Sleep1, borderRadius: 10, flex: 1}}>
    <Text></Text>
  </View>
)

export const JCalendar = ({styles}) => {
  return(
      <View style={styles}>
        <WeekView
            // showTitle={false}
            events={myEvents}
            selectedDate={new Date()}
            headerStyle={myHeader}
            locale={'en_sg'}
            weekStartsOn={6} 
            numberOfDays={7}
            timeStep={120}
            startHour={0}
            hoursInDisplay={48}
            formatTimeLabel={"h A"}
            formatDateHeader= {"D ddd"}
            EventComponent={MyEventComponent}
        />
      </View>
  )
}
