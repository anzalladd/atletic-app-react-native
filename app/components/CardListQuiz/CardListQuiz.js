import React from 'react';
import {View, Text} from 'native-base';
import styles from './styles';
import {TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import PropTypes from 'prop-types';
import font from '../../style/style';

const CardListQuiz = props => {
  const bgColor = id => {
    switch (id) {
      case '1':
        return '#456BFF';
      case '2':
        return '#11D4FF';
      case '3':
        return '#FF7D5C';
      case '4':
        return '#FFAB38';
      case '5':
        return '#FF4545';
      default:
        return '#456BFF';
    }
  };
  return (
    <View
      style={[props.style, styles.card, {backgroundColor: bgColor(props.id)}]}>
      <View style={styles.text}>
        <Text style={font.FONT_CONTENT_BOLD_WHITE}>{props.title}</Text>
      </View>
      <TouchableOpacity onPress={props.onPress} style={styles.btn}>
        <Icon name="arrow-forward" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

CardListQuiz.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object,
  onPress: PropTypes.func,
  bgColor: PropTypes.string,
  id: PropTypes.string,
};

CardListQuiz.defaultProps = {
  title: 'Title',
  style: {},
  onPress: () => {
    return;
  },
  bgColor: '#456BFF',
  id: '1',
};

export default CardListQuiz;
