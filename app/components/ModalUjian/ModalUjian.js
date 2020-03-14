import React from 'react';
import {Modal} from 'react-native';
import {View, Text, Button} from 'native-base';
import styles from './styles';
import ModalIcon from '../../assets/icon/modalIcon';
import FONT from '../../style';

const ModalQuiz = props => {
  return (
    <Modal transparent animationType="slide" visible={props.isOpen}>
      <View style={styles.modalWrapper}>
        <View style={styles.card}>
          <View style={styles.content}>
            <ModalIcon />
            <Text style={[FONT.FONT_CONTENT_BOLD, styles.title]}>
              Yakin Dengan Jawaban Kamu? 😁
            </Text>
            <Text style={[FONT.FONT_CONTENT, styles.subTitle]}>
              Pastikan jawaban yang kamu masukan Benar yaa...
            </Text>
          </View>
          <View style={styles.action}>
            <Button style={styles.btnCheck} onPress={props.check}>
              <Text>CEK LAGI</Text>
            </Button>
            <Button style={styles.btnDone} onPress={props.done}>
              <Text>SELESAI</Text>
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalQuiz;
