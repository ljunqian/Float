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
    startDate: new Date(2021, 9, 20, 23, 30),
    endDate: new Date(2021, 9, 21, 9, 0),
    color: 'transparent',
    // ... more properties if needed,
  },
  {
    id: 2,
    description: 'Event',
    startDate: new Date(2021, 9, 22, 1, 0),
    endDate: new Date(2021, 9, 22, 8, 30),
    color: 'transparent',
    // ... more properties if needed,
  },
  {
    id: 3,
    description: 'Event',
    startDate: new Date(2021, 9, 23, 0, 0),
    endDate: new Date(2021, 9, 23, 7, 0),
    color: 'transparent',
    // ... more properties if needed,
  },
  {
    id: 4,
    description: 'Event',
    startDate: new Date(2021, 9, 24, 0, 30),
    endDate: new Date(2021, 9, 24, 8, 0),
    color: 'transparent',
    // ... more properties if needed,
  },
  {
    id: 5,
    description: 'Event',
    startDate: new Date(2021, 9, 24, 23, 50),
    endDate: new Date(2021, 9, 25, 7, 30),
    color: 'transparent',
    // ... more properties if needed,
  },
  {
    id: 6,
    description: 'Event',
    startDate: new Date(2021, 9, 26, 0, 50),
    endDate: new Date(2021, 9, 26, 8, 10),
    color: 'transparent',
    // ... more properties if needed,
  },
  {
    id: 7,
    description: 'Event',
    startDate: new Date(2021, 9, 27, 0, 20),
    endDate: new Date(2021, 9, 27, 8, 20),
    color: 'transparent',
    // ... more properties if needed,
  },
  // More events...
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
