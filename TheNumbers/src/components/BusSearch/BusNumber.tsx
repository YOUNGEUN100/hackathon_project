import {Pressable, StyleSheet, Text, View} from 'react-native';
import * as React from 'react';
import VoiceListening from '../VoiceListening';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BusStackParamList} from '../../pages/BusSearchScreen';
import {useCallback} from 'react';

type BusSearchScreenProps = NativeStackScreenProps<
  BusStackParamList,
  'BusStop'
>;

function BusNumber({navigation}: BusSearchScreenProps) {
  const toBusArrival = useCallback(() => {
    navigation.navigate('BusArrival');
  }, [navigation]);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>탑승하려는 버스번호를 말해주세요</Text>
      <VoiceListening />
      <Pressable onPress={toBusArrival} style={styles.button}>
        <Text>버스 도착정보 확인</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});
export default BusNumber;
