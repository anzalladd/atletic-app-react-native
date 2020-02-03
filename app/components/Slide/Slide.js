import React from 'react';
import {View, Text, Image} from 'react-native';
import STYLE from '../../style';
import styles from './styles';
import PropType from 'prop-types';
import {IMAGES} from '../../configs';

const Slide = props => {
  return (
    <View style={styles.slide}>
      <Image source={props.image} />
      <Text style={[STYLE.FONT_HEADER_WHITE, styles.center, styles.textHeader]}>
        {props.textHeader}
      </Text>
      <Text
        style={[STYLE.FONT_CONTENT_WHITE, styles.center, styles.textContent]}>
        {props.textContent}
      </Text>
    </View>
  );
};

Slide.defaultProps = {
  image: IMAGES,
  textHeader: 'Header',
  textContent: 'Text Content',
};

Slide.propTypes = {
  image: PropType.number,
  textHeader: PropType.string,
  textContent: PropType.string,
};

export default Slide;
