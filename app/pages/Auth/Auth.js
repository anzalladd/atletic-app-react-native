import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, ToastAndroid} from 'react-native';
import {AuthContext} from '../../context/Auth/AuthContext';
import {IMAGES} from '../../configs';
import styles from './styles';
import STYLES from '../../style';
import FormAuth from '../../components/FormAuth';
import {Content, Icon, Button, Spinner} from 'native-base';
import SERVICES from '../../configs/services';
import storage from '../../utils/storage';
import STORAGE_KEY from '../../configs/storageKey';

const Auth = props => {
  const {router} = props;
  const {isLogin, authForm, setIsLogin} = useContext(AuthContext);
  const [isLoading, setLoading] = useState(false);
  const loginComponent = {
    title: 'MASUK',
    image: IMAGES.LOGIN,
    description: 'Masukkan email dan password kamu',
  };
  const registerComponent = {
    title: 'DAFTAR',
    image: IMAGES.REGISTER,
    description: 'Daftarkan akun kamu dan mulai menjelajah',
  };
  const performAuth = async () => {
    setLoading(true);
    try {
      const auth = isLogin
        ? SERVICES.login(authForm)
        : SERVICES.register(authForm);
      const result = await auth;
      if (result.code === 200) {
        ToastAndroid.show(result.message, ToastAndroid.SHORT);
        if (isLogin) {
          router.navigation.navigate('AppScreen');
          await storage.set(STORAGE_KEY.TOKEN_LOGIN, result.data);
        } else {
          setIsLogin(true);
        }
      } else {
        ToastAndroid.show(result.message, ToastAndroid.SHORT);
      }
    } catch (err) {
      ToastAndroid.show('Network Error', ToastAndroid.SHORT);
    } finally {
      setLoading(false);
    }
  };
  const authComponent = isLogin ? loginComponent : registerComponent;
  return (
    <Content>
      <View style={[STYLES.CONTAINER, styles.container]}>
        <View style={styles.header}>
          <Image source={authComponent.image} />
          <Text style={[STYLES.FONT_HEADER, styles.title]}>
            {authComponent.title}
          </Text>
          <Text style={[STYLES.FONT_CONTENT, styles.description]}>
            {authComponent.description}
          </Text>
        </View>
        <FormAuth />
        {!isLoading ? (
          <Button
            style={styles.btnLogin}
            onPress={() => performAuth()}
            color="#456BFF">
            <Text style={[STYLES.FONT_CONTENT_WHITE, styles.btnText]}>
              {isLogin ? 'Masuk Sekardang' : 'Daftar Sekarang'}
            </Text>
            <Icon name="arrow-forward" style={styles.btnIcon} />
          </Button>
        ) : (
          <Spinner color="#456BFF" />
        )}
      </View>
    </Content>
  );
};

export default Auth;
