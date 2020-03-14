import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  btn: {
    backgroundColor: 'white',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 14,
    paddingRight: 14,
  },
  icon: {
    fontSize: 20,
  },
});

export default styles;
