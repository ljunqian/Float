import React from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-big-calendar';
import 'dayjs/locale/en-sg';
import Moment from 'moment';

/* Big Calendar can be used to show month  */

const events: ICalendarEvent<{ color?: string }>[] = [
      {
        title: 'Meeting',
        start: Moment('2021-10-15T22:00:00').format(),
        end: Moment('2021-10-15T24:00:00').format(),
        color: 'purple',
      },
      {
        title: 'Coffee break',
        start: Moment('2021-10-13T22:00:00').format(),
        end: Moment('2021-10-13T23:00:00').format(),
      },
      {
        title: 'Coffee break',
        start: Moment('2021-10-16T22:00:00').format(),
        end: Moment('2021-10-16T23:00:00').format(),
      },
      {
        title: 'Coffee break',
        start: Moment('2021-10-16T22:30:00').format(),
        end: Moment('2021-10-16T24:00:00').format(),
      },
    ]

const darkTheme = {
  palette: {
    primary: {
      main: '#6185d0',
      contrastText: '#000',
    },
    gray: {
      '100': '#333', 
      '200': '#666', //grids
      '300': '#888', 
      '500': '#6185d0', //day/time
      '800': '#ccc', //date
    },
  },
}


export const JCalendar = ({styles}) =>{
    return(
        <View style={styles}>
            <Calendar 
                events={events} 
                height={260} 
                locale={'en_sg'}
                // theme={darkTheme}
                mode={'month'}
                // mode={'3days'}
                // mode={'custom'}
                weekStartsOn={6}
                showTime={true}
                hideNowIndicator={true}
                />
        </View>
    )
}