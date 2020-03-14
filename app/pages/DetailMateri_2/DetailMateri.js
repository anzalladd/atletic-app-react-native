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
        <Header title="Lompat Jauh" description="Materi video dan penjelasan" />
        <Content>
          <View style={styles.video}>
            <WebView
              source={{
                uri: 'https://www.youtube.com/embed/c2_GvxFuVwE',
              }}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              allowsFullscreenVideo={true}
            />
          </View>
          <View>
            <Text style={[FONT.FONT_HEADER, styles.title]}>Pengertian</Text>
            <Text style={[FONT.FONT_CONTENT, styles.content]}>
              Lompat jauh merupakan salah satu nomor lompat selain lompat
              jangkit, lompat tinggi, dan lompt tinggi galah. Tujuan lompat jauh
              adalah melompat sejauh-jauhnya dengan memindahkan seluruh tubuh
              dari titik-titik tertentu ke titik lainnya, dengan cara berlari
              secepat-cepatnya kemudian menolak, melayang di udara dan mendarat,
              pencapaian jarak lompatan yang sejauh jauhnya. Untuk mencapai
              jarak lompat yang jauh, terlebih dahulu pelompat harus memahami
              unsur – unsur pokok pada lompat jauh.
            </Text>
            <Text style={[FONT.FONT_HEADER, styles.title]}>Teknik Dasar</Text>
            <View style={styles.subTitle}>
              <Text style={[FONT.FONT_CONTENT_BOLD]}>
                Awalan atau ancang-ancang
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Lari ancang-ancang tergantung pada kemampuan masing-masing
                siswa.
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Tambah kecepatan lari ancang-ancang sedikit demi sedikit
                sebelumbertumpu/bertolak.
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Pinggang diturunkan sedikit pada satu langkah akhir
                ancang-ancang.
              </Text>
            </View>
            <View style={styles.subTitle}>
              <Text style={[FONT.FONT_CONTENT_BOLD]}>Tumpuan</Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Ayunkan paha kaki ke posisi horizontal dan dipertahankan.
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Luruskan sendi mata kaki, lutut, dan pinggang pada waktu
                melakukan tolakan.
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Bertolaklah ke depan dank ke atas.
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Sudut tolakan 45⁰.
              </Text>
            </View>
            <View style={styles.subTitle}>
              <Text style={[FONT.FONT_CONTENT_BOLD]}>Melayang Di Udara</Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Sikap badan melayang di udara yaitu sikap setelah kaki tolak
                menolakkan kaki pada balok tumpuan. Badan akan dapat terangkat
                melayang di udara, bersamaan dengan ayunan kedua lengan ke depan
                atas. Tinggi dan jatuhnya hasil lompatan sangat tergantung dari
                besarnya kekuatan kaki tolak, dan pelompat harus meluruskan kaki
                tumpu selurus-lurusnya dan
              </Text>
            </View>
            <View style={styles.subTitle}>
              <Text style={[FONT.FONT_CONTENT_BOLD]}>Mendarat</Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Untuk menghindarkan pendaratan pada pantat, kepala ditundukkan
                dan lengan diayunkan ke depan sewaktu kaki menyentuh pasir.
                Titik berat badan akan melampaui titik pendaratan kaki di pasir.
                Kaki tidak kaku dan tegang, melainkan lemas-lentur. Maka sendi
                lutut harus siap menekuk pada saat yang tepat. Gerakan ini
                memerlukan waktu (timing) yang tepat.
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
