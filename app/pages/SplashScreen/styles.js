import {StyleSheet} from 'react-native';
import {CONSTANS, COLOR} from '../../configs';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  support: {
    position: 'absolute',
    bottom: 20,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  textSupport: {
    fontFamily: CONSTANS.FONT_REGULAR,
    marginBottom: 10,
    color: COLOR.BLACK_2,
    fontSize: 10,
  },
});

export default styles;
