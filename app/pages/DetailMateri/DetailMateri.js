import React, {Fragment} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {View, Content} from 'native-base';
import Header from '../../components/Header';
import styles from './styles';
import Container from '../../components/Base/Container';
import WebView from 'react-native-webview';
import FONT from '../../style/style';
import Bottom from '../../components/bottom-navigation';
import Back from '../../assets/icon/Back';

const DetailMateri = props => {
  const goBack = () => {
    props.navigation.goBack();
  };
  return (
    <Fragment>
      <Container>
        <Header title="Jalan Cepat" description="Materi video dan penjelasan" />
        <Content>
          <View style={styles.video}>
            <WebView
              source={{
                uri: 'https://www.youtube.com/embed/2kZGP1l3n_M',
              }}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              allowsFullscreenVideo={true}
            />
          </View>
          <View>
            <Text style={[FONT.FONT_HEADER, styles.title]}>Pengertian</Text>
            <Text style={[FONT.FONT_CONTENT, styles.content]}>
              Pengertian jalan cepat atau yang juga disebut dengan istilah Race
              Walking merupakan sebuah gerakan maju dimana kaki akan melangkah
              dengan hubungan yang tidak terputus dengan tanah
            </Text>
            <Text style={[FONT.FONT_HEADER, styles.title]}>Teknik Dasar</Text>
            <View style={styles.subTitle}>
              <Text style={[FONT.FONT_CONTENT_BOLD]}>
                Teknik dasar awalan dan menolak melalui atas box
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Berdiri sikap melangkah di belakang garis start
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Badan condong ke depan.
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Langkahkan kaki belakang ke depan, dilanjutkan{'\n'}berjalan
                cepat.
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Pandangan mata lurus ke depan.
              </Text>
            </View>
            <View style={styles.subTitle}>
              <Text style={[FONT.FONT_CONTENT_BOLD]}>
                Gerakan kaki jalan cepat
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Dorong kaki belakang ke depan dari tumit, telapak kaki dan
                jari-jari kaki.
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Meletakkan kaki dengan ringan.
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Gerak kaki mendatar, bukan melompat
              </Text>
            </View>
            <View style={styles.subTitle}>
              <Text style={[FONT.FONT_CONTENT_BOLD]}>
                Gerak kaki mendatar, bukan melompat
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Bahu rileks /tidak tegang.
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Ayunan lengan yang wajar mengayun dari muka ke belakang dan siku
                ditekuk kurang lebih 90º, kondisi ini dipertahankan dengan tidak
                mengganggu keseimbangan
              </Text>
            </View>
            <View style={styles.subTitle}>
              <Text style={[FONT.FONT_CONTENT_BOLD]}>
                Keterampilan gerak posisi togok jalan cepat
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Dorong kaki belakang ke depan dari tumit, telapak kaki dan
                jari-jari kaki.
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Meletakkan kaki dengan ringan
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Gerak kaki mendatar, bukan melompat
              </Text>
            </View>
            <View style={styles.subTitle}>
              <Text style={[FONT.FONT_CONTENT_BOLD]}>
                Memasuki garis finish
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Memasuki gari finish tidak mengurangi kecepatan jalan
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Membungkukkan bahu ke depan / menjatuhkan salah satu bahu ke
                depan.
              </Text>
            </View>
          </View>
        </Content>
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
    </Fragment>
  );
};

export default DetailMateri;
