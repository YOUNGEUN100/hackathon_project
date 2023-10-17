import {Pressable, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GuideStackParamList} from '../../pages/RouteGuideScreen';
import {useCallback} from 'react';

type GuideSearchScreenProps = NativeStackScreenProps<
  GuideStackParamList,
  'Destination'
>;
function CheckLocation({navigation}: GuideSearchScreenProps) {
  const toChooseRoute = useCallback(() => {
    navigation.navigate('ChooseRoute');
  }, [navigation]);
  return (
    <View>
      <View>
        <Text>출발지</Text>
        <Text>인헌시장</Text>
      </View>
      <View>
        <Text>목적지</Text>
        <Text>더조은컴퓨터학원</Text>
      </View>
      <View>
        <Pressable onPress={toChooseRoute}>
          <Text>경로 탐색</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default CheckLocation;
