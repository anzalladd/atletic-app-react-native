/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, Fragment, useRef} from 'react';
import {Text, Spinner, View} from 'native-base';
import storage from '../../utils/storage';
import STORAGE_KEY from '../../configs/storageKey';
import Service from '../../configs/services';
import styles from './styles';
import Bottom from '../../components/bottom-navigation';
import Back from '../../assets/icon/Back';
import Forward from '../../assets/icon/Forward';
import FONT from '../../style/style';
import {TouchableOpacity, ToastAndroid} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const Quiz = props => {
  const [listSoal, setSoal] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [activeSoal, setActiveSoal] = useState(0);
  const [selected, setSelected] = useState(null);
  const [jawaban, setJawaban] = useState([]);
  const [isShowPembahasan, setPembahasan] = useState(false);
  const scrollViewRef = useRef();
  useEffect(() => {
    const getSoal = async () => {
      const id = props.navigation.getParam('id', 0);
      const key = await storage.get(STORAGE_KEY.TOKEN_LOGIN);
      const header = {
        Authorization: `Bearer ${key}`,
      };
      const params = {
        id,
        kelompok: 'anzalla',
      };
      try {
        const response = await Service.getSoalById(header, params);
        if (response.code === 403 || response.code === 401) {
          props.navigation.navigate('AuthScreen');
          await storage.remove(STORAGE_KEY.TOKEN_LOGIN);
        }
        setLoading(false);
        setSoal(response.data.soal);
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
  useEffect(() => {
    if (jawaban.length > 9) {
      const id = props.navigation.getParam('id', 0);
      const params = {
        id,
        kelompok: 'anzalla',
      };
      props.navigation.navigate('ResultScreen', {
        payload: jawaban,
        id: params.id,
      });
    }
  }, [jawaban]);
  const listJawaban = ['A', 'B', 'C', 'D'];
  const goBack = () => {
    props.navigation.goBack();
  };
  const nextSoal = () => {
    if (selected != null) {
      let newArray = [...jawaban];
      newArray[activeSoal] = selected;
      if (!isShowPembahasan) {
        setPembahasan(true);
        setTimeout(() => {
          scrollViewRef.current.scrollToEnd({animated: true});
        }, 100);
      } else {
        setTimeout(() => {
          scrollViewRef.current.scrollTo({y: 0, animated: true});
        }, 100);
        setActiveSoal(activeSoal + 1);
        setJawaban(newArray);
        setSelected(null);
        setPembahasan(false);
      }
    } else {
      ToastAndroid.show('Pilih Jawaban Terlebih Dahulu', ToastAndroid.SHORT);
    }
  };
  const submitSoal = () => {
    let newArray = [...jawaban];
    newArray[activeSoal] = selected;
    setJawaban(newArray);
  };
  const renderNomor = () => {
    const render = listSoal.map((value, index) => (
      <View
        style={[
          styles.nomor,
          index === activeSoal ? styles.active : styles.notActive,
        ]}
        key={index}>
        <Text
          style={
            index === activeSoal ? styles.activeText : styles.notActiveText
          }>
          {index < 9 ? `0${index + 1}` : index + 1}
        </Text>
      </View>
    ));
    return render;
  };
  if (isLoading) {
    return <Spinner color="#231D5A" />;
  }
  const bgColorActive = (index, value) => {
    return index === selected ? '#231D5A' : '#F5F6F8';
  };
  const bgColorActiveHasil = index => {
    if (selected === listSoal[activeSoal].jawaban) {
      if (index === selected) {
        return '#0FBC73';
      } else {
        return '#E5E5E5';
      }
    } else {
      if (index === selected) {
        return '#FF4545';
      } else if (index === listSoal[activeSoal].jawaban) {
        return '#0FBC73';
      } else {
        return '#E5E5E5';
      }
    }
  };
  const textColorActive = index => {
    return index === selected ? 'white' : 'black';
  };
  const textColorActiveHasil = index => {
    if (index === selected || index === listSoal[activeSoal].jawaban) {
      return 'white';
    }
    return 'black';
  };
  return (
    <Fragment>
      <ScrollView ref={scrollViewRef}>
        <View style={[styles.container]}>
          {listSoal[activeSoal] && (
            <View>
              <View style={styles.wrapperNomor}>{renderNomor()}</View>
              <View style={styles.cardSoal}>
                <Text>{`Soal ${activeSoal + 1}`}</Text>
                <Text style={styles.soal}>{listSoal[activeSoal].title}</Text>
              </View>
              <View style={styles.wrapperJawaban}>
                {listSoal[activeSoal].pililhan.map((value, index) => {
                  return (
                    <TouchableOpacity
                      style={[
                        styles.jawaban,
                        {
                          backgroundColor: !isShowPembahasan
                            ? bgColorActive(index, value)
                            : bgColorActiveHasil(index),
                        },
                      ]}
                      disabled={isShowPembahasan}
                      key={index + 1}
                      onPress={() => setSelected(index)}>
                      <Text
                        style={{
                          color: !isShowPembahasan
                            ? textColorActive(index)
                            : textColorActiveHasil(index),
                        }}>
                        {listJawaban[index]}. {value}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          )}
          {isShowPembahasan && (
            <View style={styles.cardSoal}>
              <Text style={FONT.FONT_CONTENT_BOLD}>Pembahasan :</Text>
              <Text style={[styles.soal, FONT.FONT_CONTENT]}>
                {listSoal[activeSoal].pembahasan}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
      <Bottom>
        <View style={styles.wrapperBottom}>
          <TouchableOpacity onPress={() => goBack()}>
            <View style={styles.bottom}>
              <View style={styles.icon}>
                <Back />
              </View>
              <Text style={[FONT.FONT_CONTENT_BOLD]}>KELUAR</Text>
            </View>
          </TouchableOpacity>
          {activeSoal === listSoal.length - 1 && isShowPembahasan ? (
            <TouchableOpacity onPress={() => submitSoal()}>
              <View style={styles.bottom}>
                <Text style={[FONT.FONT_CONTENT_BOLD, styles.icon]}>
                  SELESAI
                </Text>
                <View>
                  <Forward />
                </View>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => nextSoal()}>
              <View style={styles.bottom}>
                <Text style={[FONT.FONT_CONTENT_BOLD, styles.icon]}>
                  LANJUT
                </Text>
                <View>
                  <Forward />
                </View>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </Bottom>
    </Fragment>
  );
};

export default Quiz;
