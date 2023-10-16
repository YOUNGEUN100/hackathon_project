import {Text, View} from 'react-native';
import * as React from 'react';
import VoiceListening from '../components/VoiceListening';

function BusStop() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>버스 정류장</Text>
      <VoiceListening />
    </View>
  );
}
export default BusStop;
