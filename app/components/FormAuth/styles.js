import {StyleSheet} from 'react-native';
import {COLOR, CONSTANS} from '../../configs';

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  item: {
    borderWidth: 1,
    borderBottomColor: COLOR.BLACK_2,
  },
  label: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: CONSTANS.TYPO_CONTENT,
    color: COLOR.BLACK_2,
  },
  link: {
    color: COLOR.MAIN_PRIMARY,
    fontSize: CONSTANS.TYPO_SMALL,
  },
});

export default styles;
