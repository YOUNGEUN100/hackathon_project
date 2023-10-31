import {Pressable, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GuideStackParamList} from '../../pages/RouteGuideScreen';
import {useCallback, useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {styles} from '../../assets/styles';
import {theme} from '../../assets/color';

type GuideSearchScreenProps = NativeStackScreenProps<
  GuideStackParamList,
  'Destination'
>;
function CheckLocation({navigation}: GuideSearchScreenProps) {
  const [myDeparture, setMyDeparture] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [startAdd, setStartAdd] = useState('');

  useEffect(() => {
    Geolocation.getCurrentPosition(
      info => {
        setMyDeparture({
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
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${myDeparture?.latitude},${myDeparture?.longitude}&key=AIzaSyANv-BGckrRoPY57yapZnSyZqz10N9ZKMA`,
    )
      .then(response => response.json())
      .then(data => {
        // console.log(data.results);
        setStartAdd(data.results[0].formatted_address);
        // console.log(startAdd);
      })
      .catch(error => console.warn(error));
  }, [myDeparture]);

  const toChooseRoute = useCallback(() => {
    navigation.navigate('ChooseRoute');
  }, [navigation]);
  const toDestination = useCallback(() => {
    navigation.navigate('Destination');
  }, [navigation]);
  const toDeparture = useCallback(() => {
    navigation.navigate('Departure');
  }, [navigation]);
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.text}>출발지</Text>
        <Text style={{...styles.text, color: theme.red}}>{startAdd}</Text>
        <Pressable onPress={toDeparture} style={styles.changeButton}>
          <Text style={styles.changeButtonText}>출발지 변경</Text>
        </Pressable>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.text}>목적지</Text>
        <Text style={{...styles.text, color: theme.red}}>더조은컴퓨터학원</Text>
        <Pressable onPress={toDestination} style={styles.changeButton}>
          <Text style={styles.changeButtonText}>목적지 변경</Text>
        </Pressable>
      </View>
      <View>
        <Pressable onPress={toChooseRoute} style={styles.nextButton}>
          <Text style={styles.nextButtonText}>경로 탐색</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default CheckLocation;
