import {StyleSheet} from 'react-native';
const layout = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(52, 52, 52, 0)',
    padding: 10,
    display: 'flex',
  },
  header: {
    display: 'flex',
    width: '100%',
    //height: 400,
    paddingHorizontal: 10, 
    zIndex: 1,
  },
  minute: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: 51,
    height: 24,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  guideCard: {
    backgroundColor: "#EEEEEE",
    padding: 12,
    borderRadius: 20,
    margin: 6,
  },
  button: {
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    backgroundColor: 'white',
    color: 'black',
    width: 180,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },
  big_button: {
    borderRadius: 48,
    width: 135,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12
  },
  bigger_button: {
    borderRadius: 48,
    width: 180,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12
  },
  
  /*
  card: {
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    backgroundColor: 'white',
    height: 100,
    width: '90%',
    borderRadius: 12,
    margin: 10,
    padding: 10,
    display: 'flex',
    justifyContent:'space-between',
    flexDirection: 'row'
  },*/
  imageCard: {
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    backgroundColor: '#EEEEEE',
    height: 161,
    width: 180,
    marginHorizontal: 10,
  },
})  

export default layout;