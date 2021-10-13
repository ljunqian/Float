import {StyleSheet} from 'react-native';
import { inlineStyles } from 'react-native-svg';
import { backgroundColor, flexWrap } from 'styled-system';

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
      marginHorizontal: 31
    },

    rewardRowContainer: {
      marginHorizontal: 12,
      flexDirection: 'row',
      flexWrap: 'wrap'
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

    centeredView: {
      display: 'flex',
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      alignSelf:'center',
      top: '20%',
      position: 'absolute',
    },
    modalView: {
      margin: 50,
      backgroundColor: "white",
      borderRadius: 30,
      padding: 40,
      flex: 0.65,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      marginTop: 20,
      // width:200,
      padding: 10,
      elevation: 2
    },
    buttonClose: {
      backgroundColor: "#A5A6F6",
    },
    text: {
      color: "#000",
      // fontWeight: "bold",
      fontSize: 12,
      fontFamily: 'Montserrat-Regular',
      textAlign: "center",
      marginTop:170
    },
    btntext: {
      color: "white",
      fontWeight: "bold",
      fontSize: 12,
      fontFamily: 'Montserrat-Regular',
      textAlign: "center"

    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      fontSize: 14,
      fontFamily: 'Montserrat-Regular',
      fontWeight: "bold",
      color: '#000'
    },
});

export default style;