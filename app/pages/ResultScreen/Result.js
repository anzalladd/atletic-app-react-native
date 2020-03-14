/* eslint-disable react-hooks/exhaustive-deps */
import React, {Fragment, useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {View, Content, Spinner} from 'native-base';
import storage from '../../utils/storage';
import STORAGE_KEY from '../../configs/storageKey';
import Service from '../../configs/services';
import styles from './styles';
import Container from '../../components/Base/Container';
import FONT from '../../style';

const Result = props => {
  const [isLoading, setLoading] = useState(true);
  const [hasil, setHasil] = useState(null);
  const jawaban = props.navigation.getParam('payload', []);
  const id = props.navigation.getParam('id', {});
  useEffect(() => {
    const postSoal = async () => {
      setLoading(true);
      const payload = {
        jawaban,
        id,
      };
      const key = await storage.get(STORAGE_KEY.TOKEN_LOGIN);
      const header = {
        Authorization: `Bearer ${key}`,
        params: {
          id,
        },
      };
      try {
        const result = await Service.postQuiz(header, payload);
        if (result.code === 403 || result.code === 401) {
          props.navigation.navigate('AuthScreen');
          await storage.remove(STORAGE_KEY.TOKEN_LOGIN);
        }
        setHasil(result.data.nilai);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    postSoal();
    return () => {
      console.log('Unmounted');
    };
  }, []);
  if (isLoading) {
    return <Spinner color="#231D5A" />;
  }
  return (
    <View style={styles.container}>
      <Container>
        <View style={styles.card}>
          <View style={styles.flex}>
            <Text style={FONT.FONT_HEADER}>Nilai Kamu</Text>
            <Text style={styles.nilai}>{hasil}</Text>
            <View style={styles.barRed}>
              <View
                style={[
                  styles.barGreen,
                  {width: parseFloat((hasil / 100) * 100).toFixed(2) + '%'},
                ]}
              />
            </View>
          </View>
          <View style={styles.wrapperNilai}>
            <View style={styles.flexCenter}>
              <View style={styles.flexCenter}>
                <View style={styles.dotGreen} />
                <Text style={styles.benar}>Benar ({hasil / 10})</Text>
              </View>
              <View style={styles.flexCenter}>
                <View style={styles.dotRed} />
                <Text>Salah ({jawaban.length - hasil / 10})</Text>
              </View>
            </View>
            <Text>
              {hasil / 10} / {jawaban.length} Soal
            </Text>
          </View>
        </View>
      </Container>
      <TouchableOpacity
        style={styles.bottom}
        onPress={() => props.navigation.navigate('AppScreen')}>
        <View>
          <Text style={FONT.FONT_CONTENT_BOLD_WHITE}>SELESAI</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Result;
