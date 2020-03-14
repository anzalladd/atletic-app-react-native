import React from 'react';
import {View, Text} from 'native-base';
import Container from '../Base/Container';
import styles from './styles';

const BottomNavigation = props => {
  return (
    <View style={styles.bottom}>
      <View>{props.children}</View>
    </View>
  );
};

export default BottomNavigation;
