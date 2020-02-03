import React, {useContext, useEffect, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Text, Form, Item, Input, Icon} from 'native-base';
import {AuthContext} from '../../context/Auth/AuthContext';

const FormLogin = () => {
  const {isLogin, setIsLogin, setAuthForm, authForm} = useContext(AuthContext);
  const [isHide, setHide] = useState(true);
  const authChange = () => {
    setIsLogin(!isLogin);
  };
  const _renderLogin = () => {
    if (!isLogin) {
      return (
        <View>
          <Text style={styles.label}>Nama</Text>
          <Item style={styles.item}>
            <Input
              style={styles.input}
              onChangeText={e => onChangeText(e, 'name')}
              value={authForm.name}
            />
          </Item>
        </View>
      );
    }
    return;
  };
  const onChangeText = (e, name) => {
    setAuthForm(prevState => ({
      ...prevState,
      [name]: e,
    }));
  };
  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) {
      const login = {
        email: '',
        password: '',
      };
      const register = {
        name: '',
        email: '',
        password: '',
      };
      const form = isLogin ? login : register;
      setAuthForm(form);
    }
    return () => {
      console.log('Unmounting');
      isCancelled = true;
    };
  }, [isLogin, setAuthForm]);
  return (
    <View style={styles.form}>
      <Form>
        {_renderLogin()}
        <View>
          <Text style={styles.label}>Email</Text>
          <Item style={styles.item}>
            <Input
              style={styles.input}
              onChangeText={e => onChangeText(e, 'email')}
              value={authForm.email}
              autoCompleteType="email"
            />
          </Item>
        </View>
        <View>
          <Text style={styles.label}>Password</Text>
          <Item style={styles.item}>
            <Input
              style={styles.input}
              secureTextEntry={isHide}
              onChangeText={e => onChangeText(e, 'password')}
              value={authForm.password}
            />
            {isHide ? (
              <Icon name="eye-off" onPress={() => setHide(!isHide)} />
            ) : (
              <Icon name="eye" onPress={() => setHide(!isHide)} />
            )}
          </Item>
        </View>
        <TouchableOpacity style={styles.label} onPress={() => authChange()}>
          <Text style={styles.link}>
            {isLogin ? 'Belum Punya Akun' : 'Sudah Punya Akun'}?
          </Text>
        </TouchableOpacity>
      </Form>
    </View>
  );
};

export default FormLogin;
