import React from 'react';

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
            title: 'Meditation 01',
            description: 'Excerise Activity 1.1',
            duration: '3-5 mins',
            image: Explore1,
            line: 70.25,
            id: 11
        },
        {
            title: 'Meditation 02',
            description: 'Excerise Activity 1.2',
            duration: '5-10 mins',
            image: Med3,
            line: 177.25,
            id: 12
        },
        {
            title: 'Meditation 03',
            description: 'Excerise Activity 1.3',
            duration: '10-15 mins',
            image: Med2,
            line: 287.25,
            id: 13
        },
        {
            title: 'Meditation 04',
            description: 'Excerise Activity 1.4',
            duration: '10-15 mins',
            image: Explore1,
            line: 397.25,
            id: 14
        },
        {
            title: 'Meditation 05',
            description: 'Excerise Activity 1.5',
            duration: '15-20 mins',
            image: Med3,
            line: 397.25,
            id: 15
        }
    ],
    "Sleep": [
        {
            title: 'Sleep 01',
            description: 'Excerise Activity 1.1',
            duration: '20-25 mins',
            image: Sleep3,
            line: 70.25,
            id: 21
        },
        {
            title: 'Sleep 02',
            description: 'Excerise Activity 1.2',
            duration: '10-15 mins',
            image: Sleep2,
            line: 177.25,
            id: 22
        },
        {
            title: 'Sleep 03',
            description: 'Excerise Activity 1.3',
            duration: '5-10 mins',
            image: Focus2,
            line: 177.25,
            id: 23
        },
    ],
    "Move": [
        {
            title: 'Move 01',
            description: 'Excerise Activity 1.1',
            duration: '20-25 mins',
            image: Move3,
            line: 70.25,
            id: 31
        },
        {
            title: 'Move 02',
            description: 'Excerise Activity 1.2',
            duration: '10-15 mins',
            image: Move2,
            line: 177.25,
            id: 32
        },
        {
            title: 'Move 03',
            description: 'Excerise Activity 1.3',
            duration: '10-15 mins',
            image: Move3,
            line: 287.25,
            id: 33
        },
        {
            title: 'Move 04',
            description: 'Excerise Activity 1.4',
            duration: '5-10 mins',
            image: Move2,
            line: 287.25,
            id: 34
        }
    ],
    "Focus": [
        {
            title: 'Focus 01',
            description: 'Excerise Activity 1.1',
            duration: '10-15 mins',
            image: Sleep3,
            line: 70.25,
            id: 41
        },
        {
            title: 'Focus 02',
            description: 'Excerise Activity 1.2',
            duration: '15 mins',
            image: Move1,
            line: 177.25,
            id: 42
        },
        {
            title: 'Focus 03',
            description: 'Excerise Activity 1.3',
            duration: '15-20 mins',
            image: Focus2,
            line: 287.25,
            id: 43
        },
        {
            title: 'Focus 04',
            description: 'Excerise Activity 1.4',
            duration: '10-15 mins',
            image: Move1,
            line: 397.25,
            id: 44
        },
        {
            title: 'Focus 05',
            description: 'Excerise Activity 1.5',
            duration: '10-15 mins',
            image: Sleep2,
            line: 397.25,
            id: 45
        }
    ]
}