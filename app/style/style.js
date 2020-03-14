import {StyleSheet} from 'react-native';
import {CONSTANS, COLOR} from '../configs';

const style = StyleSheet.create({
  FONT_SMALL: {
    fontSize: CONSTANS.TYPO_SMALL,
    fontFamily: CONSTANS.FONT_REGULAR,
    color: COLOR.BLACK_1,
  },
  FONT_SMALL_BOLD: {
    fontSize: CONSTANS.TYPO_SMALL,
    fontFamily: CONSTANS.FONT_BOLD,
    color: COLOR.BLACK_1,
  },
  FONT_SMALL_WHITE: {
    fontSize: CONSTANS.TYPO_SMALL,
    fontFamily: CONSTANS.FONT_REGULAR,
    color: COLOR.WHITE,
  },
  FONT_HEADER: {
    fontSize: CONSTANS.TYPO_HEADER,
    fontFamily: CONSTANS.FONT_BOLD,
    color: COLOR.BLACK_1,
  },
  FONT_HEADER_WHITE: {
    fontSize: CONSTANS.TYPO_HEADER,
    fontFamily: CONSTANS.FONT_BOLD,
    color: COLOR.WHITE,
  },
  FONT_CONTENT_WHITE: {
    fontSize: CONSTANS.TYPO_CONTENT,
    fontFamily: CONSTANS.FONT_REGULAR,
    color: COLOR.WHITE,
  },
  FONT_CONTENT_MEDIUM_WHITE: {
    fontSize: CONSTANS.TYPO_CONTENT,
    fontFamily: CONSTANS.FONT_SEMIBOLD,
    color: COLOR.WHITE,
  },
  FONT_CONTENT_BOLD_WHITE: {
    fontSize: CONSTANS.TYPO_CONTENT,
    fontFamily: CONSTANS.FONT_BOLD,
    color: COLOR.WHITE,
  },
  FONT_CONTENT: {
    fontSize: CONSTANS.TYPO_CONTENT,
    fontFamily: CONSTANS.FONT_REGULAR,
    color: COLOR.BLACK_1,
  },
  FONT_CONTENT_BOLD: {
    fontSize: CONSTANS.TYPO_CONTENT,
    fontFamily: CONSTANS.FONT_BOLD,
    color: COLOR.BLACK_1,
  },
  FONT_CONTENT_MEDIUM: {
    fontSize: CONSTANS.TYPO_CONTENT,
    fontFamily: CONSTANS.FONT_MEDIUM,
    color: COLOR.BLACK_1,
  },
  CONTAINER: {
    paddingHorizontal: CONSTANS.BASE_MARGIN,
  },
});

export default style;
