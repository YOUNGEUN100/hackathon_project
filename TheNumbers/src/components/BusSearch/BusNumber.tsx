import {Pressable, StyleSheet, Text, View} from 'react-native';
import * as React from 'react';
import VoiceListening from '../VoiceListening';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BusStackParamList} from '../../pages/BusSearchScreen';
import {useCallback} from 'react';
import { styles } from "../../assets/styles";

type BusSearchScreenProps = NativeStackScreenProps<
  BusStackParamList,
  'BusStop'
>;

function BusNumber({navigation}: BusSearchScreenProps) {
  const toBusArrival = useCallback(() => {
    navigation.navigate('BusArrival');
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text style={styles.speechText}>탑승하려는</Text>
      <Text style={styles.speechText}>버스번호를</Text>
      <Text style={styles.speechText}>말해주세요</Text>
      <VoiceListening />
      <Pressable onPress={toBusArrival} style={styles.nextButton}>
        <Text style={styles.nextButtonText}>▶ 버스 도착정보 확인</Text>
      </Pressable>
    </View>
  );
}


export default BusNumber;
