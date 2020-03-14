import React, {useEffect, useState} from 'react';
import {View, Text, Button, Content, Fab} from 'native-base';
import {Image} from 'react-native';
import storage from '../../utils/storage';
import STORAGE_KEY from '../../configs/storageKey';
import Header from '../../components/Header';
import CardMateri from '../../components/CardMateri';
import Container from '../../components/Base/Container';
import {IMAGES} from '../../configs';
import styles from './styles';

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
  const goDetail = navigasi => {
    props.navigation.navigate(navigasi);
  };
  return (
    <View style={styles.container}>
      <Container>
        <Header
          title="Jelajah Ilmu"
          description="Luaskan pengetahuan atletik"
        />
        <View style={styles.card}>
          <CardMateri
            title="Tolak Peluru"
            color="#456BFF"
            onPress={() => goDetail('DetailScreen')}
          />
          <CardMateri
            title="Lompat Jauh"
            color="#FFAB38"
            onPress={() => goDetail('DetailScreen_2')}
          />
          <CardMateri
            title="Lari Jarak Pendek"
            color="#11D4FF"
            onPress={() => goDetail('DetailScreen_3')}
          />
        </View>
      </Container>
    </View>
  );
};

export default App;
