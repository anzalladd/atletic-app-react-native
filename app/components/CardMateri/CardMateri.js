import React from 'react';
import {Text, View, Button, Icon} from 'native-base';
import styles from './styles';
import PropTypes from 'prop-types';
import FONT from '../../style/style';

const CardMateri = props => {
  const getInisial = text => {
    const array = text.split(/(\s+)/).filter(function(e) {
      return e.trim().length > 0;
    });
    let title = '';
    for (let i = 0; i < array.length; i++) {
      title += array[i][0];
    }
    return title;
  };
  return (
    <View style={[styles.card, {backgroundColor: props.color}]}>
      <View style={[styles.cardInisial]}>
        <Text style={styles.textInisial}>{getInisial(props.title)}</Text>
      </View>
      <View style={styles.row}>
        <View>
          <Text style={FONT.FONT_SMALL_WHITE}>Materi</Text>
          <Text style={[FONT.FONT_CONTENT_BOLD_WHITE, styles.title]}>
            {props.title}
          </Text>
        </View>
        <View>
          <Button icon style={styles.button} onPress={props.onPress}>
            <Icon name="arrow-forward" style={styles.icon} />
          </Button>
        </View>
      </View>
    </View>
  );
};

CardMateri.defaultProps = {
  title: 'TItle',
  color: '#456BFF',
  onPress: () => {
    return;
  },
};

CardMateri.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  onPress: PropTypes.func,
};

export default CardMateri;
