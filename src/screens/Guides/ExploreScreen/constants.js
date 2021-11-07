import React from 'react';

import {Guides} from '../constants';

import Video1 from '../../../assets/icons/video_orange.png';
import Video2 from '../../../assets/icons/video_blue.png';
import Video3 from '../../../assets/icons/video_red.png';
import Video4 from '../../../assets/icons/video_green.png';
import Time1 from '../../../assets/icons/time_orange.png';
import Time2 from '../../../assets/icons/time_blue.png';
import Time3 from '../../../assets/icons/time_red.png';
import Time4 from '../../../assets/icons/time_green.png';
import Tick1 from '../../../assets/icons/tick_orange.png';
import Tick2 from '../../../assets/icons/tick_blue.png';
import Tick3 from '../../../assets/icons/tick_red.png';
import Tick4 from '../../../assets/icons/tick.png';

import Explore1 from '../../../assets/images/explore1.png';
import Med2 from '../../../assets/images/med2.png';
import Med3 from '../../../assets/images/med3.png';
import Explore2 from '../../../assets/images/explore2.png';

import Focus2 from '../../../assets/images/focus2.png';
import Sleep2 from '../../../assets/images/sleep2.png';
import Sleep3 from '../../../assets/images/sleep3.png';

import Move3 from '../../../assets/images/move3.png';
import Move2 from '../../../assets/images/move2.png';
import Move1 from '../../../assets/images/move1.png';

export const icons = {
    "Meditate": {
        video: Video1,
        time: Time1,
        tick: Tick1
    },
    "Sleep": {
        video: Video2,
        time: Time2,
        tick: Tick2
    },
    "Move": {
        video: Video3,
        time: Time3,
        tick: Tick3
    },
    "Focus": {
        video: Video4,
        time: Time4,
        tick: Tick4
    }
    
}

export const lessons = {
    "Meditate": [
        {
            ...Guides[2],
            activity: 'Excerise Activity 1.1',
            duration: Guides[2].duration,
            line: 78.25,
        },
        {
            ...Guides[3],
            activity: 'Excerise Activity 1.2',
            duration: Guides[3].duration,
            line: 197
        },
        {
            ...Guides[0],
            activity: 'Excerise Activity 1.3',
            duration: Guides[0].duration,
            line: 317
        },
        {
            ...Guides[4],
            activity: 'Excerise Activity 1.4',
            duration: Guides[4].duration,
   
            line: 438
        },
        {
            ...Guides[1],
            activity: 'Excerise Activity 1.5',
            duration: Guides[1].duration,
            line: 438
        }
    ],
    "Sleep": [
        {
            ...Guides[9],
            activity: 'Excerise Activity 1.1',
            duration: Guides[9].duration,
            line: 78.
        },
        {
            ...Guides[10],
            activity: 'Excerise Activity 1.2',
            duration: Guides[10].duration,
            line: 197
        },
        {
            ...Guides[11],
            activity: 'Excerise Activity 1.3',
            duration: Guides[11].duration,
            line: 197
        },
    ],
    "Move": [
        {
            ...Guides[15],
            activity: 'Excerise Activity 1.1',
            duration: Guides[15].duration,
            line: 78.
        },
        {
            ...Guides[14],
            activity: 'Excerise Activity 1.2',
            duration: Guides[14].duration,
            line: 197
        },
        {
            ...Guides[16],
            activity: 'Excerise Activity 1.3',
            duration: Guides[16].duration,
            line: 317
        },
        {
            ...Guides[13],
            activity: 'Excerise Activity 1.4',
            duration: Guides[13].duration,
            line: 317
        }
    ],
    "Focus": [
        {
            ...Guides[18],
            activity: 'Excerise Activity 1.1',
            duration: Guides[18].duration,
            line: 78.
        },
        {
            ...Guides[19],
            activity: 'Excerise Activity 1.2',
            duration: Guides[19].duration,
            line: 197
        },
        {
            ...Guides[20],
            activity: 'Excerise Activity 1.3',
            duration: Guides[20].duration,
            line: 317
        },
        {
            ...Guides[21],
            activity: 'Excerise Activity 1.4',
            duration: Guides[21].duration,
            line: 438
        },
        {
            ...Guides[22],
            activity: 'Excerise Activity 1.5',
            duration: Guides[22].duration,
            line: 438
        }
    ]
}