import {Text, View} from 'react-native';
import * as React from 'react';
import VoiceListening from '../components/VoiceListening';

function BusSearch() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>버스찾기 화면</Text>
      <VoiceListening />
    </View>
  );
}
export default BusSearch;
