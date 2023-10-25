import {Image, Pressable, Text, View} from 'react-native';
import * as React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BusStackParamList} from '../../pages/BusSearchScreen';
import {useCallback, useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {theme} from '../../assets/color';
import busStopImg from '../../assets/images/bus-stop.png';
import {styles} from '../../assets/styles';

type BusSearchScreenProps = NativeStackScreenProps<
  BusStackParamList,
  'BusStop'
>;
function BusStop({navigation}: BusSearchScreenProps) {
  const [myPosition, setMyPosition] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  // const [myBusStop, setMyBusStop] = useState('');

  const toBusNumber = useCallback(() => {
    navigation.navigate('BusNumber');
  }, [navigation]);

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
          <Image source={busStopImg} />
          <Text style={{color: theme.white, fontSize: 20}}>정류장명</Text>
        </View>
        <View style={styles.border} />
        <Text style={styles.busStopName}>인헌시장입구</Text>
        <Text style={styles.busStopNum}>21562</Text>
        <Text style={styles.busStopMeter}>389m 이내</Text>
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
