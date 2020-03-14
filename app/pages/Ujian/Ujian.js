/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, Fragment} from 'react';
import {Text, Spinner, View} from 'native-base';
import storage from '../../utils/storage';
import STORAGE_KEY from '../../configs/storageKey';
import Service from '../../configs/services';
import styles from './styles';
import Bottom from '../../components/bottom-navigation';
import Back from '../../assets/icon/Back';
import Forward from '../../assets/icon/Forward';
import ForwardDisable from '../../assets/icon/ForwardDisable';
import FONT from '../../style/style';
import Modal from '../../components/ModalUjian';
import {TouchableOpacity, ScrollView} from 'react-native';

const Quiz = props => {
  const [listSoal, setSoal] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [activeSoal, setActiveSoal] = useState(0);
  const [selected, setSelected] = useState(null);
  const [jawaban, setJawaban] = useState([]);
  const [isDone, setDone] = useState(false);
  const [isModal, setModal] = useState(false);
  useEffect(() => {
    const getSoal = async () => {
      const key = await storage.get(STORAGE_KEY.TOKEN_LOGIN);
      const header = {
        Authorization: `Bearer ${key}`,
      };
      const params = {
        id: 0,
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
    if (isDone) {
      props.navigation.navigate('ResultUjianScreen', {
        payload: jawaban,
      });
    }
  }, [isDone]);
  const listJawaban = ['A', 'B', 'C', 'D'];
  const goBack = () => {
    props.navigation.goBack();
  };
  const nextSoal = () => {
    if (Number.isInteger(jawaban[activeSoal])) {
      setActiveSoal(activeSoal + 1);
    } else {
      let newArray = [...jawaban];
      newArray[activeSoal] = selected;
      setActiveSoal(activeSoal + 1);
      setJawaban(newArray);
      setSelected(null);
    }
  };
  const previousSoal = () => {
    if (selected != null) {
      let newArray = [...jawaban];
      newArray[activeSoal] = selected;
      setActiveSoal(activeSoal - 1);
      setJawaban(newArray);
      setSelected(null);
    } else {
      setActiveSoal(activeSoal - 1);
    }
  };
  const submitSoal = () => {
    if (!jawaban.includes(null)) {
      setModal(true);
    } else {
      return;
    }
  };
  const styleNomor = index => {
    if (index === activeSoal) {
      return styles.active;
    } else if (jawaban[index] === null) {
      return styles.notSelect;
    } else if (Number.isInteger(jawaban[index])) {
      return styles.selected;
    } else {
      return styles.notActive;
    }
  };
  const textNomor = index => {
    if (
      index === activeSoal ||
      jawaban[index] === null ||
      Number.isInteger(jawaban[index])
    ) {
      return 'white';
    } else {
      return 'black';
    }
  };
  const renderNomor = () => {
    const render = listSoal.map((value, index) => (
      <View style={[styles.nomor, styleNomor(index)]} key={index}>
        <Text style={{color: textNomor(index)}}>
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
    if (index === selected) {
      return '#231D5A';
    } else if (index === jawaban[activeSoal] && selected === null) {
      return '#231D5A';
    } else {
      return '#F5F6F8';
    }
  };
  const textColorActive = index => {
    if (index === selected) {
      return 'white';
    } else if (index === jawaban[activeSoal] && selected === null) {
      return 'white';
    } else {
      return 'black';
    }
  };
  const validateJawaban = () => {
    const checkNull = jawaban.some(el => {
      return el === null;
    });
    return !checkNull;
  };
  const selectJawaban = index => {
    if (activeSoal === listSoal.length - 1) {
      setSelected(index);
      let newArray = [...jawaban];
      newArray[activeSoal] = index;
      setJawaban(newArray);
    } else {
      setSelected(index);
    }
  };
  const done = () => {
    setDone(true);
    setModal(false);
  };
  return (
    <Fragment>
      <ScrollView>
        <View style={isModal && styles.modal} />
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
                          backgroundColor: bgColorActive(index, value),
                        },
                      ]}
                      key={index + 1}
                      onPress={() => selectJawaban(index)}>
                      <Text
                        style={{
                          color: textColorActive(index),
                        }}>
                        {listJawaban[index]}. {value}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          )}
        </View>
      </ScrollView>
      <Bottom>
        <View style={styles.wrapperBottom}>
          {activeSoal === 0 ? (
            <TouchableOpacity onPress={() => goBack()}>
              <View style={styles.bottom}>
                <View style={styles.icon}>
                  <Back />
                </View>
                <Text style={[FONT.FONT_CONTENT_BOLD]}>KELUAR</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => previousSoal()}>
              <View style={styles.bottom}>
                <View style={styles.icon}>
                  <Back />
                </View>
                <Text style={[FONT.FONT_CONTENT_BOLD]}>KEMBALI</Text>
              </View>
            </TouchableOpacity>
          )}

          {activeSoal === listSoal.length - 1 ? (
            <TouchableOpacity
              onPress={() => submitSoal()}
              disabled={!validateJawaban()}>
              <View style={styles.bottom}>
                <Text
                  style={[
                    FONT.FONT_CONTENT_BOLD,
                    styles.icon,
                    !validateJawaban() ? styles.disabledBtn : '',
                  ]}>
                  SELESAI
                </Text>
                <View>
                  {!validateJawaban() ? <ForwardDisable /> : <Forward />}
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
      <Modal
        isOpen={isModal}
        check={() => setModal(false)}
        done={() => done()}
      />
    </Fragment>
  );
};

export default Quiz;
