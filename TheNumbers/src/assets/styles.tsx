import {StyleSheet} from 'react-native';
import {theme} from './color';

export const styles = StyleSheet.create({
  // 공통
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.bg,
  },
  // 앱 메인 화면
  title: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: theme.white,
    marginRight: 10,
  },
  buttonZone: {
    flex: 4,
  },
  screenButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: "row",
    backgroundColor: theme.yellow,
    paddingHorizontal: 80,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  screenButtonText: {
    marginLeft: 15,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.black,
  },
  guideContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: theme.bg,
  },
  border: {
    marginVertical: 15,
    width: 300,
    height: 1,
    borderWidth: 0.5, // 테두리 두께
    borderColor: theme.white, // 테두리 색상
  },
  busStopName: {
    color: theme.yellow,
    fontSize: 30,
    marginTop: 10,
    textAlign: 'center',
  },
  busStopNum: {
    color: theme.yellow,
    marginTop: 5,
    textAlign: 'center',
  },
  busStopMeter: {
    color: theme.yellow,
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  changeButton: {
    marginVertical: 20,
    backgroundColor: theme.white,
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 10,
  },
  changeButtonText: {
    color: theme.black,
    fontSize: 18,
  },
  nextButtonText: {
    color: theme.black,
    fontSize: 18,
  },
  nextButton: {
    marginTop: 50,
    backgroundColor: theme.yellow,
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 10,
  },
  speechText: {
    color: theme.yellow,
    fontSize: 30,
    textAlign: 'center',
  },
  infoText: {
    fontSize: 30,
    marginBottom: 30,
    color: theme.yellow,
  },
  text: {
    fontSize: 25,
    color: theme.yellow,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  circleBox: {
    backgroundColor: theme.yellow,
    borderRadius: 100,
    height: 80,
    width: 80,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  circleBoxText: {
    fontSize: 20,
    color: theme.black,
    textAlign: 'center',
  },
  zone: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgSize50: {
    maxWidth: 50,
    maxHeight: 50,
  },
});
