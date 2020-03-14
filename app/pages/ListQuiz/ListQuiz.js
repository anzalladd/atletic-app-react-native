/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Text, Spinner, Icon} from 'native-base';
import styles from './styles';
import Container from '../../components/Base/Container';
import Header from '../../components/Header';
import Card from '../../components/CardListQuiz';
import storage from '../../utils/storage';
import STORAGE_KEY from '../../configs/storageKey';
import Service from '../../configs/services';
import {IMAGES} from '../../configs';
import FONT from '../../style/style';
import Bottom from '../../components/bottom-navigation';
import Back from '../../assets/icon/Back';

const ListQuiz = props => {
  const [listQuiz, setListQuiz] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const getSoal = async () => {
      const key = await storage.get(STORAGE_KEY.TOKEN_LOGIN);
      const header = {
        Authorization: `Bearer ${key}`,
      };
      try {
        const response = await Service.getListQuiz(header);
        if (response.code === 403 || response.code === 401) {
          props.navigation.navigate('AuthScreen');
          await storage.remove(STORAGE_KEY.TOKEN_LOGIN);
        }
        setLoading(false);
        setListQuiz(response.data);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    getSoal();
    return () => {
      console.log('Unmounted');
    };
  }, []);
  const goBack = () => {
    props.navigation.goBack();
  };
  const goUjian = () => {
    props.navigation.navigate('UjianScreen');
  };
  const goQuiz = id => {
    props.navigation.navigate('QuizScreen', {id});
  };
  const renderCard = () => {
    const card = listQuiz.map(value => {
      return (
        <Card
          key={value.id}
          style={styles.cardQuiz}
          title={value.title}
          id={value.id}
          onPress={() => goQuiz(value.id)}
        />
      );
    });
    return card;
  };
  return (
    <View style={styles.container}>
      <Container>
        <Header
          title="Quiz Mode"
          description="Tantang dirimu menjadi lebih baik"
        />
        {isLoading ? (
          <View style={styles.wrapperSpinner}>
            <Spinner color="#231D5A" />
          </View>
        ) : (
          renderCard()
        )}
        <View style={styles.cardUjian}>
          <Image source={IMAGES.UJIAN} />
          <Text style={[FONT.FONT_CONTENT_BOLD, styles.textUjian]}>
            Ayok Mulai Ujian
          </Text>
        </View>
        <TouchableOpacity onPress={() => goUjian()}>
          <View style={styles.buttonUjian}>
            <Icon name="play" style={styles.iconPlay} />
            <Text style={[FONT.FONT_CONTENT_BOLD_WHITE, styles.textUjian]}>
              MULAI UJIAN
            </Text>
          </View>
        </TouchableOpacity>
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

export default ListQuiz;
