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
        <Header
          title="Lari Jalan Pendek(Sprint)"
          description="Materi video dan penjelasan"
        />
        <Content>
          <View style={styles.video}>
            <WebView
              source={{
                uri: 'https://www.youtube.com/embed/FkunrtHPM1c',
              }}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              allowsFullscreenVideo={true}
            />
          </View>
          <View>
            <Text style={[FONT.FONT_HEADER, styles.title]}>Pengertian</Text>
            <Text style={[FONT.FONT_CONTENT, styles.content]}>
              Lari jarak pendek atau sprint adalah salah satu jenis lari yang
              dilakukan dengan kekuatan dan kecepatan penuh sepanjang garis
              lintasan dari start hingga finish dimana pemenangnya ditentukan
              berdasarkan catatan waktu yang paling singkat. Terdapat tiga jarak
              lintasan yang dilombakan pada lari jarak pendek, yaitu lari jarak
              100 meter, 200 meter dan 400 meter
            </Text>
            <Text style={[FONT.FONT_HEADER, styles.title]}>
              Teknik Start Lari Jarak Pendek
            </Text>
            <View style={styles.subTitle}>
              <Text style={[FONT.FONT_CONTENT_BOLD]}>
                Start Pendek (Bunch Start)
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Kaki kiri di depan dan lutut kaki kanan diletakkan di sebelah
                kaki kiri sekitar satu kepal. Kedua tangan diletakkan di
                belakang garis start dengan jari-jari rapat dan ibu jari
                terpisah.
              </Text>
            </View>
            <View style={styles.subTitle}>
              <Text style={[FONT.FONT_CONTENT_BOLD]}>
                Start Menengah (Medium Start)
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Kaki kiri di depan, lutut kaki kanan diletakkan di sebelah kanan
                tumit kaki kiri jaraknya sekitar satu kepal. Kedua tangan
                diletakkan diletakkan di belakang garis start dengan empat
                jari-jari rapat. Ibu jari terpisah.
              </Text>
            </View>
            <View style={styles.subTitle}>
              <Text style={[FONT.FONT_CONTENT_BOLD]}>
                Start Panjang (Long Start)
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Kaki kiri diletakkan di depan lutut kaki kanan di belakang kaki
                kiri, jaraknya sekitar satu kepal. Kedua tangan diletakkan di
                belakang garis start dengan jari-jari rapat dan ibu jari
                terpisah.
              </Text>
            </View>
            <Text style={[FONT.FONT_HEADER, styles.title]}>Aba Aba</Text>
            <View style={styles.subTitle}>
              <Text style={[FONT.FONT_CONTENT_BOLD]}>Aba-aba bersedia</Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Setelah starter memberikan aba-aba bersedia, maka pelari akan
                menempatkan kedua kakinya menyentuh blok depan dan belakang,
                kemudian lutut kaki belakang diletakkan di tanah, terpisah
                selebar bahu. Jari-jari tangan membentuk V terbalik dan kepala
                dalam keadaan datar dengan punggung, sedangkan mata tetap
                menatap lurus ke bawah.
              </Text>
            </View>
            <View style={styles.subTitle}>
              <Text style={[FONT.FONT_CONTENT_BOLD]}>Aba-aba siap</Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Setelah ada aba-aba siap, posisi badan seorang pelari adalah
                lutut ditekan ke belakang, lutut kaki depan ada dalam posisi
                membentuk sudut siku-siku 90 derajat, sedangkan kaki belakang
                pelari membentuk 120-140 derajat. Dan posisi pinggang sedikit
                diangkat lebih tinggi dari bahu, tubuh sedikit condong ke depan,
                serta bahu agak maju ke depan dari dua tangan.
              </Text>
            </View>
            <View style={styles.subTitle}>
              <Text style={[FONT.FONT_CONTENT_BOLD]}>Aba-aba Yaak</Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Setelah seorang starter memberikan aba-aba, maka gerakan seorang
                pelari adalah badan diluruskan dan diangkat pada saat kedua kaki
                menolak atau menekan keras pada start blok, dan kedua tangan
                diangkat dari tanah secara bersamaan untuk kemudian diayunkan
                bergantian. Kaki belakang mendorong lebih kuat, dorongan kaki
                depan sedikit demi sedikit, namun tidak lama, kaki belakang
                diayunkan ke depan dengan cepat sedangkan badan condong ke
                depan, lutut dan pinggang diluruskan penuh pada saat akhir
                dorongan.
              </Text>
            </View>
            <Text style={[FONT.FONT_HEADER, styles.title]}>
              Teknik Lari Jarak Pendek
            </Text>
            <View style={styles.subTitle}>
              <Text style={[FONT.FONT_CONTENT_BOLD]}>Fase Topang</Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Mendarat pada telapak kaki.
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Lutut kaki topang bengkok harus minimal pada saat amortasi.
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Kaki ayun dipercepat, pinggang, sendi lutut dan mata kaki dari
                kaki topang harus diluruskan kuat-kuat pada saat bertolak.
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Paha kaki ayun naik dengan cepat ke suatu posisi horizontal.
              </Text>
            </View>
            <View style={styles.subTitle}>
              <Text style={[FONT.FONT_CONTENT_BOLD]}>Fase layang</Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Lutut kaki ayun bergerak ke depan dan ke atas.
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Lutut kaki topang bengkok dalam fase pemulihan, ayunan lengan
                aktif namun rilek.
              </Text>
            </View>
            <View style={styles.wrapperList}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={[FONT.FONT_CONTENT, styles.listText]}>
                Kaki topang bergerak ke belakang.
              </Text>
            </View>
            <Text style={[FONT.FONT_HEADER, styles.title]}>
              Teknik Melewati Garis Finish
            </Text>
            <View style={styles.subTitle}>
              <Text style={[FONT.FONT_CONTENT_BOLD]}>
                Menjatuhkan dada ke depan
              </Text>
            </View>
            <View style={styles.subTitle}>
              <Text style={[FONT.FONT_CONTENT_BOLD]}>
                Menjatuhkan salah satu bahu ke depan.
              </Text>
            </View>
            <View style={styles.subTitle}>
              <Text style={[FONT.FONT_CONTENT_BOLD]}>
                Lari secepat-cepatnya sampai beberapa meter melewati garis
                finish.
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
