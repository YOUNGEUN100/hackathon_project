import {Pressable, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import VoiceListening from '../VoiceListening';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GuideStackParamList} from '../../pages/RouteGuideScreen';
import {styles} from '../../assets/styles';
import {useCallback} from 'react';
import Tts from 'react-native-tts';

type GuideSearchScreenProps = NativeStackScreenProps<
  GuideStackParamList,
  'Destination'
>;
function Destination({navigation}: GuideSearchScreenProps) {
  const toCheckLocation = useCallback(() => {
    navigation.navigate('CheckLocation');
  }, [navigation]);

  const openBusNumber = () => {
    Tts.setDefaultLanguage('ko-KR');
    Tts.speak('목적지를 말해주세요');
  };

  useEffect(() => {
    openBusNumber();
  }, []);
  
  return (
    <View style={styles.container}>
      <Text style={styles.speechText}>목적지를 말해주세요.</Text>
      <VoiceListening />
      <Pressable style={styles.changeButton} onPress={toCheckLocation}>
        <Text style={styles.changeButtonText}>확인</Text>
      </Pressable>
    </View>
  );
}
export default Destination;
