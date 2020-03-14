import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: 'white',
  },
  card: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#F5F6F8',
    marginTop: 20,
  },
  title: {
    paddingBottom: 10,
  },
  wrapperText: {
    marginTop: 10,
    paddingBottom: 10,
  },
  border: {
    borderBottomWidth: 1.5,
    borderBottomColor: '#E3E1EB',
  },
  detailText: {
    marginTop: 5,
  },
  usernameText: {
    marginTop: 5,
    textTransform: 'capitalize',
  },
  btnTentang: {
    display: 'flex',
    justifyContent: 'center',
    height: 58,
    marginTop: 20,
    backgroundColor: '#3444AC',
  },
  btnLogout: {
    display: 'flex',
    justifyContent: 'center',
    height: 58,
    marginTop: 20,
    backgroundColor: '#FF4545',
  },
  wrapperBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    marginLeft: 10,
  },
});

export default styles;
