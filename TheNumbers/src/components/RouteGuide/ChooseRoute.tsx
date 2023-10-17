import {Pressable, Text, View} from 'react-native';
import * as React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GuideStackParamList} from '../../pages/RouteGuideScreen';
import {useCallback} from 'react';
type GuideSearchScreenProps = NativeStackScreenProps<
  GuideStackParamList,
  'ChooseRoute'
>;
function ChooseRoute({navigation}: GuideSearchScreenProps) {
  const toGuide = useCallback(() => {
    navigation.navigate('Guide');
  }, [navigation]);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Pressable onPress={toGuide}>
        <Text>최소 환승 경로 안내</Text>
      </Pressable>
      <Pressable onPress={toGuide}>
        <Text>최단 시간 경로 안내</Text>
      </Pressable>
    </View>
  );
}
export default ChooseRoute;
