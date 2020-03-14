import {StyleSheet} from 'react-native';
import COLOR from '../../configs/color';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    flex: 1,
  },
  barRed: {
    width: '100%',
    backgroundColor: '#FF4545',
    height: 10,
    marginTop: 20,
  },
  barGreen: {
    backgroundColor: '#0FBC73',
    height: 10,
  },
  flexCenter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  benar: {
    marginRight: 20,
  },
  dotGreen: {
    height: 5,
    width: 5,
    marginRight: 8,
    backgroundColor: '#0FBC73',
    borderRadius: 10000,
  },
  dotRed: {
    height: 5,
    width: 5,
    marginRight: 8,
    backgroundColor: 'red',
    borderRadius: 10000,
  },
  wrapperNilai: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  nilai: {
    fontSize: 42,
    fontWeight: 'bold',
  },
  card: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#F5F6F8',
    marginTop: 40,
  },
  flex: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#231D5A',
    width: '100%',
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default styles;
