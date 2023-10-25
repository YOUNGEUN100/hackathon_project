import React, {useState, useEffect} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
// import * as React from 'react';
import VoiceListening from '../VoiceListening';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BusStackParamList} from '../../pages/BusSearchScreen';
import {useCallback} from 'react';
import { styles } from "../../assets/styles";
import Tts from 'react-native-tts';

type BusSearchScreenProps = NativeStackScreenProps<
  BusStackParamList,
  'BusStop'
>;



function BusNumber({navigation}: BusSearchScreenProps) {
  const toBusArrival = useCallback(() => {
    navigation.navigate('BusArrival');
  }, [navigation]);

  const openBusNumber = () => {
    Tts.setDefaultLanguage('ko-KR');
    Tts.speak('탑승하려는 버스번호를 말해주세요');
  };

  useEffect(() => {
    openBusNumber();
  }, []);

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
