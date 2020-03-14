import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: 'white',
  },
  card: {
    paddingBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#F5F6F8',
    marginTop: 20,
  },
  wrapperProfile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  textProfile: {
    marginLeft: 10,
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
});

export default styles;
