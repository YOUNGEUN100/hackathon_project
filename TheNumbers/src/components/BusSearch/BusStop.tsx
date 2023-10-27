import { Alert, Image, Pressable, Text, View } from "react-native";
import * as React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BusStackParamList} from '../../pages/BusSearchScreen';
import {useCallback, useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {theme} from '../../assets/color';
import {styles} from '../../assets/styles';
import axios, { AxiosError } from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

type BusSearchScreenProps = NativeStackScreenProps<
  BusStackParamList,
  'BusStop'
>;
function BusStop({navigation}: BusSearchScreenProps) {

  const [loading, setLoading] = useState(false);
  const [myPosition, setMyPosition] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const [myBusStop, setMyBusStop] = useState({
    stationNm: '',
    arsId: '',
    dist: '',
   });

  const toBusNumber = useCallback(() => {
    navigation.navigate('BusNumber');
    AsyncStorage.setItem("arsId", myBusStop.arsId);
  }, [navigation]);

  const getStationInfo =  async () => {
    const postData = {
      tmX: "126.893269",
      tmY: "37.472748"
    };
    try {
      setLoading(true);
      const response = await axios.post('http://218.38.132.187:9090/seoul/station/latlng', postData);
      console.log(response.data);
      setMyBusStop(response.data);
      Alert.alert('알림', '버스정보 데이터 도착');
    } catch (error) {
      const errorResponse = (error as AxiosError).response;
      console.error(errorResponse);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStationInfo();
  }, []);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      info => {
        setMyPosition({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        });
      },
      console.error,
      {
        enableHighAccuracy: true,
        timeout: 20000,
      },
    );
  }, []);


  return (
    <View style={styles.container}>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../../assets/images/bus-stop.png')}  />
          <Text style={{color: theme.white, fontSize: 20}}>정류장명</Text>
        </View>
        <View style={styles.border} />
        {/*<ScrollView*/}
        {/*  data={busStops}*/}
        {/*  renderItem={renderItem}*/}
        {/*  keyExtractor={item => item.id.toString()}*/}
        {/*/>*/}
        <Text style={styles.busStopName}>{myBusStop.stationNm}</Text>
        <Text style={styles.busStopNum}>{myBusStop.arsId}</Text>
        <Text style={styles.busStopMeter}>{myBusStop.dist}m 이내</Text>
        <Text>{myPosition?.latitude}</Text>
        <Text>{myPosition?.longitude}</Text>
      </View>
      <Pressable style={styles.changeButton}>
        <Text style={styles.changeButtonText}>버스 정류장 변경</Text>
      </Pressable>
      <View style={styles.border} />
      <Pressable onPress={toBusNumber} style={styles.nextButton}>
        <Text style={styles.nextButtonText}>▶ 버스번호 입력</Text>
      </Pressable>
    </View>
  );
}

export default BusStop;
