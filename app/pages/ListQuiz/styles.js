import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: 'white',
  },
  cardQuiz: {
    marginTop: 20,
  },
  cardUjian: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 25,
    backgroundColor: '#F5F6F8',
    justifyContent: 'center',
    marginTop: 20,
  },
  textUjian: {
    marginLeft: 15,
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  iconPlay: {
    fontSize: 16,
    color: 'white',
  },
  buttonUjian: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#231D5A',
    paddingVertical: 22,
    justifyContent: 'center',
  },
});

export default styles;
