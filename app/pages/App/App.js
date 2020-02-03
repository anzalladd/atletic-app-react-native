import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'native-base';
import storage from '../../utils/storage';
import STORAGE_KEY from '../../configs/storageKey';

const App = props => {
  const [token, setToken] = useState('');
  useEffect(() => {
    const getKey = async () => {
      const key = await storage.get(STORAGE_KEY.TOKEN_LOGIN);
      setToken(key);
    };
    getKey();
  }, []);
  const onLogout = async () => {
    await storage.remove(STORAGE_KEY.TOKEN_LOGIN);
    props.navigation.navigate('AuthScreen');
  };
  return (
    <View>
      <Text>Halo Ini Home Bro</Text>
      <Text>Tokennya : {token}</Text>
      <Button block onPress={() => onLogout()}>
        <Text>Logout Disini ya gaes</Text>
      </Button>
    </View>
  );
};

export default App;
