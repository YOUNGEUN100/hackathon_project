import {Image, Pressable, Text, Vibration, View, Alert} from 'react-native';
import {theme} from '../../assets/color';
import {styles} from '../../assets/styles';
import { useEffect, useState } from 'react';
import axios, { AxiosError } from "axios";
// import AsyncStorage from '@react-native-async-storage/async-storage';

function BusArrival() {
  const ONE_SECOND_IN_MS = 1000;
  const [loading, setLoading] = useState(false);
  const [arrivalInfo, setArrivalInfo] = useState({
      stationNm: '',
      rtNm: '',
      arrmsg1: '',
  });
  const [stArrival, setStArrival]  = useState('');
  const [timeArrival, setTimeArrival] = useState('');

  const getArrivalInfo = async () => {
    const postData = {
      arsId: "18803",                  // AsyncStorage.getItem("arsId"),
      rtNm: "금천03"                  // AsyncStorage.getItem("rtNm")
    };
    try {
      setLoading(true);
      const response = await axios.post('http://218.38.132.187:9090/seoul/arrival', postData);
      console.log(response.data);
      setArrivalInfo(response.data);
      Alert.alert('알림', '버스도착 데이터 도착');
    } catch (error) {
      const errorResponse = (error as AxiosError).response;
      console.error(errorResponse);
    } finally {
      setLoading(false);
    }
   }
   function separateData() {
      let parts = (arrivalInfo.arrmsg1).split("[");
      console.log("parts" + parts);
      setStArrival(parts[0]);
      setTimeArrival(parts[1]);
   }

   useEffect(()=>{
      getArrivalInfo();
   },[])

  useEffect(() => {
    separateData();
  }, [arrivalInfo]);

  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>{arrivalInfo.stationNm}</Text>
      <Text style={{...styles.infoText, color: theme.green}}>{arrivalInfo.rtNm}</Text>
      <Text style={styles.infoText}>{stArrival}</Text>
      <Text style={styles.infoText}>{timeArrival}</Text>
      <Pressable
        style={{marginTop: 30}}
        onPress={() => Vibration.vibrate(2 * ONE_SECOND_IN_MS)}>
        <Image source={require('../../assets/images/camera.png')} />
      </Pressable>
    </View>
  );
}

// @ts-ignore
export default BusArrival;
