import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12
    },
    moodCard: {
        alignItems: 'center',
        width: '47%',
        height: '40%',
        borderRadius: 20,
    },
    continueButtonContainer: {
        width: '90%',
        alignSelf:'center',
        height: 46,
        backgroundColor: "#B2E5D7",
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
   }
})

export default styles;