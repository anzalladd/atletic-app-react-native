import React from 'react';
import {View} from 'native-base';
import styles from './styles';
import {ScrollView} from 'react-native';

const BaseContainer = props => {
  return (
    <ScrollView ref={props.ref}>
      <View style={[styles.container, props.style]}>{props.children}</View>
    </ScrollView>
  );
};

export default BaseContainer;
