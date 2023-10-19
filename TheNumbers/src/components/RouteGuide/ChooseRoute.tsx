import {Pressable, Text, View} from 'react-native';
import * as React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GuideStackParamList} from '../../pages/RouteGuideScreen';
import {useCallback} from 'react';
import { styles } from "../../assets/styles";
import { theme } from "../../assets/color";
type GuideSearchScreenProps = NativeStackScreenProps<
  GuideStackParamList,
  'ChooseRoute'
>;
function ChooseRoute({navigation}: GuideSearchScreenProps) {
  const toGuide = useCallback(() => {
    navigation.navigate('Guide');
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Pressable style={styles.nextButton} onPress={toGuide}>
        <Text style={styles.nextButtonText}>최소 환승 경로 안내</Text>
      </Pressable>
      <Pressable style={styles.nextButton} onPress={toGuide}>
        <Text style={styles.nextButtonText}>최단 시간 경로 안내</Text>
      </Pressable>
    </View>
  );
}
export default ChooseRoute;
