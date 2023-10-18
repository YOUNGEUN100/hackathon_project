import {Pressable, Text, View} from 'react-native';
import * as React from 'react';
import VoiceListening from '../VoiceListening';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GuideStackParamList} from '../../pages/RouteGuideScreen';
import {useCallback, useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';

type GuideSearchScreenProps = NativeStackScreenProps<
  GuideStackParamList,
  'Departure'
>;
function Departure({navigation}: GuideSearchScreenProps) {
  const [myPosition, setMyPosition] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [address, setAddress] = useState('');

  const toDestination = useCallback(() => {
    navigation.navigate('Destination');
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

  useEffect(() => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${myPosition?.latitude},${myPosition?.longitude}&key=AIzaSyANv-BGckrRoPY57yapZnSyZqz10N9ZKMA`,
    )
      .then(response => response.json())
      .then(data => {
        setAddress(data.results[0].formatted_address);
        console.log(address);
      })
      .catch(error => console.warn(error));
  }, [myPosition]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>출발지를 말해주세요.</Text>
      <Text>{myPosition?.latitude}</Text>
      <Text>{myPosition?.longitude}</Text>
      <Text>{address}</Text>
      <VoiceListening />
      <Pressable onPress={toDestination}>
        <Text>확인</Text>
      </Pressable>
    </View>
  );
}
export default Departure;
