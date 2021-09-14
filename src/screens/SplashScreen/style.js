import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    viewStyle: {
      backgroundColor: '#262626',
      width:'100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    bgImage: {
      zIndex: 2,
      position: 'absolute',
    },
    logoView: {
      zIndex: 4,
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
    },
});

export default style;