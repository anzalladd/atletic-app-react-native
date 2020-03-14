/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {View, Text} from 'native-base';
import {Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Container from '../../components/Base/Container';
import Header from '../../components/Header';
import FONT from '../../style';
import bhaswara from '../../assets/images/bhaswara.png';
import anzalla from '../../assets/images/anzalla.png';
import agya from '../../assets/images/agya.png';
import adnin from '../../assets/images/adnin.png';
import angga from '../../assets/images/angga.png';
import Bottom from '../../components/bottom-navigation';
import Back from '../../assets/icon/Back';

const Tentang = props => {
  const goBack = () => {
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Container>
        <Header
          title="Tentang Kami,"
          description="Profil anggota pembuat aplikasi"
        />
        <View style={styles.card}>
          <View style={styles.wrapperProfile}>
            <Image source={bhaswara} />
            <View style={styles.textProfile}>
              <Text style={FONT.FONT_HEADER}>Bhaswara Dertiyuga</Text>
              <Text style={FONT.FONT_CONTENT}>Project Leader</Text>
            </View>
          </View>
          <View style={styles.wrapperProfile}>
            <Image source={anzalla} />
            <View style={styles.textProfile}>
              <Text style={FONT.FONT_HEADER}>Anzalla Dzikri Dhamara</Text>
              <Text style={FONT.FONT_CONTENT}>Full-Stack Developer</Text>
            </View>
          </View>
          <View style={styles.wrapperProfile}>
            <Image source={agya} />
            <View style={styles.textProfile}>
              <Text style={FONT.FONT_HEADER}>Agya</Text>
              <Text style={FONT.FONT_CONTENT}>Content Writter</Text>
            </View>
          </View>
          <View style={styles.wrapperProfile}>
            <Image source={adnin} />
            <View style={styles.textProfile}>
              <Text style={FONT.FONT_HEADER}>Adnin</Text>
              <Text style={FONT.FONT_CONTENT}>Content Writter</Text>
            </View>
          </View>
          <View style={styles.wrapperProfile}>
            <Image source={angga} />
            <View style={styles.textProfile}>
              <Text style={FONT.FONT_HEADER}>Anggayudha</Text>
              <Text style={FONT.FONT_CONTENT}>UI/UX Designer</Text>
            </View>
          </View>
        </View>
      </Container>
      <Bottom>
        <TouchableOpacity onPress={() => goBack()}>
          <View style={styles.bottom}>
            <View style={styles.icon}>
              <Back />
            </View>
            <Text style={[FONT.FONT_CONTENT_BOLD]}>KEMBALI</Text>
          </View>
        </TouchableOpacity>
      </Bottom>
    </View>
  );
};

export default Tentang;
