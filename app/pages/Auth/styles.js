import {StyleSheet} from 'react-native';
import {CONSTANS, COLOR} from '../../configs';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    marginTop: 53,
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    height: '100%',
  },
  title: {
    marginTop: 30,
    paddingBottom: 10,
  },
  btnLogin: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    height: 65,
    backgroundColor: '#231D5A',
    borderRadius: 0,
  },
  btnIcon: {
    color: 'white',
    marginLeft: CONSTANS.BASE_MARGIN,
  },
  btnText: {
    marginBottom: 5,
  },
  wrapperBtn: {
    backgroundColor: 'white',
  },
});

export default styles;
