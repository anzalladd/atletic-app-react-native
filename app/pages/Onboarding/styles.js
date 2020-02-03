import {StyleSheet} from 'react-native';
import {COLOR, CONSTANS} from '../../configs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.MAIN_PRIMARY,
  },
  swiper: {
    flex: 9,
    paddingHorizontal: CONSTANS.BASE_MARGIN,
  },
  btnAuth: {
    flex: 1,
  },
  btnLogin: {
    width: '100%',
    backgroundColor: COLOR.MAIN_DARK,
    color: 'white',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
