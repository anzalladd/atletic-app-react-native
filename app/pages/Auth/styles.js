import {StyleSheet} from 'react-native';
import {CONSTANS, COLOR} from '../../configs';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    marginTop: 53,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginTop: 30,
    paddingBottom: 10,
  },
  btnLogin: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: CONSTANS.BASE_MARGIN,
    justifyContent: 'center',
    padding: 15,
    marginTop: 30,
  },
  btnIcon: {
    color: 'white',
    marginLeft: CONSTANS.BASE_MARGIN,
  },
  btnText: {
    marginBottom: 5,
  },
});

export default styles;
