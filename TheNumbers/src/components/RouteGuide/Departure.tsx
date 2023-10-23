import {Pressable, Text, View} from 'react-native';
import * as React from 'react';
import VoiceListening from '../VoiceListening';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GuideStackParamList} from '../../pages/RouteGuideScreen';
import { styles } from "../../assets/styles";
import { useCallback } from "react";

type GuideSearchScreenProps = NativeStackScreenProps<
  GuideStackParamList,
  'Departure'
>;
function Departure({navigation}: GuideSearchScreenProps) {
  const toCheckLocation = useCallback(() => {
    navigation.navigate('CheckLocation');
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text style={styles.speechText}>출발지를 말해주세요.</Text>
      <VoiceListening />
      <Pressable style={styles.changeButton} onPress={toCheckLocation}>
        <Text style={styles.changeButtonText}>확인</Text>
      </Pressable>
    </View>
  );
}
export default Departure;
