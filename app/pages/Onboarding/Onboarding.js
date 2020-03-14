import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import Swiper from 'react-native-web-swiper';
import styles from './styles';
import {IMAGES} from '../../configs';
import Slide from '../../components/Slide';
import STYLE from '../../style';
import storage from '../../utils/storage';
import STORAGE_KEY from '../../configs/storageKey';

const Onboarding = props => {
  const onLogin = async () => {
    console.log(props.navigation);
    await storage.set(STORAGE_KEY.HAS_VISITED_ONBOARDING, true);
    props.navigation.navigate('AuthScreen');
  };
  return (
    <View style={styles.container}>
      <View style={styles.swiper}>
        <Swiper
          controlsProps={{
            prevPos: false,
            nextPos: false,
            dotActiveStyle: {
              backgroundColor: '#fff',
            },
          }}>
          <Slide
            image={IMAGES.ILLUS}
            textHeader="BERGABUNG DENGAN KAMI"
            textContent="Hanya dengan kalian membuat akun untuk masuk ke Atletiq kalian akan dapatkan bonusnya lo..."
          />
          <Slide
            image={IMAGES.ILLUS_2}
            textHeader="BINGUNG UNTUK BELAJAR?"
            textContent="Atletiq menyediakan media pembelajaran atletik
            secara interaktif lo kawan..."
          />
          <Slide
            image={IMAGES.ILLUS}
            textHeader="BERGABUNG DENGAN KAMI"
            textContent="Hanya dengan kalian membuat akun untuk masuk ke Atletiq kalian akan dapatkan bonusnya lo..."
          />
        </Swiper>
      </View>
      <View style={styles.btnAuth}>
        <TouchableHighlight onPress={() => onLogin()}>
          <View style={styles.btnLogin}>
            <Text style={STYLE.FONT_CONTENT_WHITE}>MASUK</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Onboarding;
