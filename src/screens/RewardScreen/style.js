import {StyleSheet} from 'react-native';
import { inlineStyles } from 'react-native-svg';
import { backgroundColor } from 'styled-system';

const style = StyleSheet.create({
    tabBar: {
      width: 411,
      marginBottom: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:30,
    },

    tabIcon: {
      width: 30,
      height: 30,
      // borderRadius: 100,
      // backgroundColor: '#C4C4C4',
      marginHorizontal: 31
    },

    rewardRowContainer: {
      marginHorizontal: 12,
      flexDirection: 'row'
    },
    
    rewardCardContainer: {
      margin: 8,
      width: 176,
      padding: 6,
      borderRadius: 10
    },

    rewardItemImage: {
      backgroundColor: '#EBEBEB', 
      height: 150,
      width: '100%'
    },

    redeemButtonContainer: {
      width: 76,
      height: 16,
      backgroundColor: "#FFF",
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
    },

    redeemButtonText: {
      fontSize: 12,
      fontFamily: 'Montserrat-Regular',
      color: '#000',
    },

    statusContainer: {
      height: 16,
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
    },

    statusText: {
      fontSize: 12,
      fontFamily: 'Montserrat-Regular',
      color: '#FFF',
      marginHorizontal: 5
    },

      //add on top of global
});

export default style;