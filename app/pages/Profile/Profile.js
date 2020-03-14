/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Text, Spinner, Button} from 'native-base';
import {Image} from 'react-native';
import styles from './styles';
import Container from '../../components/Base/Container';
import Header from '../../components/Header';
import STORAGE_KEY from '../../configs/storageKey';
import storage from '../../utils/storage';
import Service from '../../configs/services';
import FONT from '../../style';
import user from '../../assets/icon/user.png';
import logout from '../../assets/icon/logout.png';

const Profile = props => {
  const [isLoading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const goLogout = async () => {
    await storage.remove(STORAGE_KEY.TOKEN_LOGIN);
    props.navigation.navigate('AuthScreen');
  };
  useEffect(() => {
    const getProfile = async () => {
      const key = await storage.get(STORAGE_KEY.TOKEN_LOGIN);
      const header = {
        Authorization: `Bearer ${key}`,
      };
      try {
        const response = await Service.getProfile(header);
        console.log(response);
        if (response.code === 403 || response.code === 401) {
          props.navigation.navigate('AuthScreen');
          await storage.remove(STORAGE_KEY.TOKEN_LOGIN);
        }
        setLoading(false);
        setProfile(response.data);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    getProfile();
    return () => {
      console.log('UnMounted');
    };
  }, []);
  if (isLoading) {
    return (
      <View style={styles.wrapperSpinner}>
        <Spinner color="#231D5A" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {profile && (
        <Container>
          <Header
            title={`Hai ${profile.name},`}
            description="Tingkatkan pencapaianmu"
          />
          <View style={styles.card}>
            <Text style={[FONT.FONT_HEADER, styles.title]}>Data Diri</Text>
            <View style={[styles.wrapperText, styles.border]}>
              <Text style={[FONT.FONT_CONTENT]}>Username</Text>
              <Text style={[FONT.FONT_CONTENT_BOLD, styles.usernameText]}>
                {profile.name}
              </Text>
            </View>
            <View style={[styles.wrapperText, styles.border]}>
              <Text style={[FONT.FONT_CONTENT]}>Email</Text>
              <Text style={[FONT.FONT_CONTENT_BOLD, styles.detailText]}>
                {profile.email}
              </Text>
            </View>
          </View>
          <Button
            style={styles.btnTentang}
            onPress={() => props.navigation.navigate('TentangScreen')}>
            <View style={styles.wrapperBtn}>
              <Image source={user} />
              <Text style={[FONT.FONT_CONTENT_BOLD_WHITE, styles.textBtn]}>
                TENTANG KAMI
              </Text>
            </View>
          </Button>
          <Button style={styles.btnLogout} onPress={() => goLogout()}>
            <View style={styles.wrapperBtn}>
              <Image source={logout} />
              <Text style={[FONT.FONT_CONTENT_BOLD_WHITE, styles.textBtn]}>
                KELUAR AKUN
              </Text>
            </View>
          </Button>
        </Container>
      )}
    </View>
  );
};

export default Profile;
