import React from 'react';
import {View, Text, Button, Icon} from 'native-base';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import FONT from '../../style/style';
import PropTypes from 'prop-types';

const Header = props => {
  return (
    <View style={styles.row}>
      <View style={styles.title}>
        <Text style={FONT.FONT_HEADER}>{props.title}</Text>
        <Text style={[FONT.FONT_CONTENT, styles.titleDescription]}>
          {props.description}
        </Text>
      </View>
      <View style={styles.search}>{props.children}</View>
    </View>
  );
};

Header.defaultProps = {
  title: 'Title',
  description: 'Description',
};

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Header;
