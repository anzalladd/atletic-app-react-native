import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 80,
  },
  wrapperNomor: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  nomor: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    marginRight: 8,
    backgroundColor: '#E5E5E5',
    marginTop: 8,
  },
  active: {
    backgroundColor: '#231D5A',
  },
  selected: {
    backgroundColor: '#0FBC73',
  },
  notSelect: {
    backgroundColor: '#FF4545',
  },
  activeText: {
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 0.8,
  },
  notActiveText: {
    fontWeight: 'bold',
    letterSpacing: 0.8,
  },
  wrapperBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  cardSoal: {
    marginTop: 20,
    backgroundColor: '#F5F6F8',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  soal: {
    marginTop: 10,
  },
  wrapperJawaban: {
    marginTop: 20,
  },
  jawaban: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 10,
  },
  disabledBtn: {
    color: 'grey',
  },
  modal: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
    zIndex: 999,
    flex: 1,
  },
});

export default styles;
