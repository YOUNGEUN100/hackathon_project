import {Pressable, Text, View} from 'react-native';
import * as React from 'react';
import VoiceListening from '../VoiceListening';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GuideStackParamList} from '../../pages/RouteGuideScreen';
import {useCallback} from 'react';

type GuideSearchScreenProps = NativeStackScreenProps<
  GuideStackParamList,
  'Departure'
>;
function Departure({navigation}: GuideSearchScreenProps) {
  const toDestination = useCallback(() => {
    navigation.navigate('Destination');
  }, [navigation]);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>출발지를 말해주세요.</Text>
      <VoiceListening />
      <Pressable onPress={toDestination}>
        <Text>확인</Text>
      </Pressable>
    </View>
  );
}
export default Departure;
