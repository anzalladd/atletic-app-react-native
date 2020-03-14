import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  card: {
    paddingTop: 33,
    backgroundColor: 'white',
  },
  content: {
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    marginTop: 33,
  },
  subTitle: {
    marginTop: 10,
  },
  action: {
    display: 'flex',
    flexDirection: 'row',
  },
  btnCheck: {
    flex: 1,
    height: 65,
    borderRadius: 0,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#FF4545',
  },
  btnDone: {
    flex: 1,
    height: 65,
    borderRadius: 0,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#231D5A',
  },
});

export default styles;
