import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingTop: 40,
  },
  buttonSearch: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0EEF8',
    height: 50,
    width: 50,
    borderRadius: 100,
  },
  title: {
    flex: 3,
  },
  search: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  titleDescription: {
    marginTop: 4,
  },
});

export default styles;
