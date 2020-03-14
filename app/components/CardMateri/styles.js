import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 120,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    color: 'white',
    paddingLeft: 10,
    marginTop: 20,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  title: {
    paddingTop: 4,
    paddingBottom: 10,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 0,
    shadowColor: '#fff',
  },
  icon: {
    color: '#231D5A',
  },
  cardInisial: {
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    height: 38,
    width: 38,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInisial: {
    opacity: 1,
    color: 'white',
  },
});

export default styles;
