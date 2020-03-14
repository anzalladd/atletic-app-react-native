import {StyleSheet} from 'react-native';
import COLOR from '../../configs/color';

const styles = StyleSheet.create({
  video: {
    height: 300,
    width: '100%',
    marginTop: 20,
  },
  title: {
    marginTop: 20,
  },
  content: {
    marginTop: 10,
    lineHeight: 20,
    letterSpacing: 0.5,
  },
  subTitle: {
    marginTop: 18,
    marginBottom: 18,
    paddingLeft: 8,
    borderLeftWidth: 5,
    borderColor: COLOR.MAIN_PRIMARY,
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  list: {
    marginBottom: 15,
  },
  wrapperList: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
    lineHeight: 18,
  },
  bullet: {
    fontSize: 20,
    marginRight: 8,
    marginTop: -5,
  },
  listText: {
    lineHeight: 22,
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
