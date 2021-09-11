import {StyleSheet} from 'react-native';
import { inlineStyles } from 'react-native-svg';
import { backgroundColor } from 'styled-system';

const style = StyleSheet.create({
    tabBar: {
      width: 411,
      marginBottom: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },

    tabIcon: {
      width: 30,
      height: 30,
      borderRadius: 100,
      backgroundColor: '#C4C4C4',
      marginHorizontal: 31
    },

    rewardRowContainer: {
      marginHorizontal: 12,
      flexDirection: 'row'
    },
    
    rewardCardContainer: {
      backgroundColor: '#EBEBEB',
      margin: 8,
      height: 176,
      width: 176
    },

    rewardItemImage: {
      backgroundColor: '#C4C4C4',
      opacity: 0.5,
      height: 150,
      width: '100%'
    },

    redeemButtonContainer: {
      width: 73,
      height: 24,
      backgroundColor: "#A5A6F6",
      borderRadius: 48,
      justifyContent: 'center',
      alignItems: 'center',
    },

    redeemButtonText: {
      fontSize: 10,
      fontFamily: 'Montserrat-Bold',
      color: '#FFF',
      fontWeight: 'bold',
    },


      //add on top of global
});

export default style;