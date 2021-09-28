import React from 'react';
import { StyleSheet } from 'react-native';

const guide = StyleSheet.create({
    container: {
    backgroundColor: '#272727',
    padding: 10,
    display: 'flex',
    color: 'white',
  },
})

export const Guides = {
    act1: {
        title : 'activity 1',
        duration : 20,
        done : false,
        source : 'link',
        description : 'Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    act2: {
        title : 'activity 2',
        duration : 20,
        done : false,
        source : 'link',
        description : 'Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
};


export default guide;