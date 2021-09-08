import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    avatarContainer: {
        flex: 1,
        height: 267,
      },
    
      pointsContainer: {
        position: 'absolute',
        width: 207,
        height: 74,
        backgroundColor: 'rgba(165, 166, 246, 0.5)',
        borderRadius: 3,
        marginTop: 123,
        marginLeft: '25%'
      },
    
      pointsLabel: {
        height: 18,
        width: '100%',
        backgroundColor: '#A5A6F6'
      },
    
      costumeContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        marginHorizontal: 11,
        marginBottom: 70,
        width: 468,
        height: 276,
        paddingHorizontal: 26
      },
    
      costume: {
        marginTop: 29,
        marginBottom: 11,
        marginRight: 30,
        borderRadius: 20,
        height: 191,
        width: 193,
        backgroundColor: '#C4C4C4',
      },

      appButtonContainer: {
        width: 79,
        height: 24,
        backgroundColor: "#A5A6F6",
        borderRadius: 48,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 0
      },

      appButtonText: {
        fontSize: 10,
        fontFamily: 'Montserrat-Bold',
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase'
      }

      //add on top of global
});

export default style;