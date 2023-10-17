import {Pressable, Text, View} from 'react-native';
import * as React from 'react';
import VoiceListening from '../VoiceListening';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GuideStackParamList} from '../../pages/RouteGuideScreen';
import {useCallback} from 'react';

type GuideSearchScreenProps = NativeStackScreenProps<
  GuideStackParamList,
  'Destination'
>;
function Destination({navigation}: GuideSearchScreenProps) {
  const toCheckLocation = useCallback(() => {
    navigation.navigate('CheckLocation');
  }, [navigation]);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>목적지를 말해주세요.</Text>
      <VoiceListening />
      <Pressable onPress={toCheckLocation}>
        <Text>확인</Text>
      </Pressable>
    </View>
  );
}
export default Destination;
