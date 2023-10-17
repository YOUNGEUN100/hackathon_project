import {Pressable, StyleSheet, Text, View} from 'react-native';
import * as React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BusStackParamList} from '../../pages/BusSearchScreen';
import {useCallback} from 'react';

type BusSearchScreenProps = NativeStackScreenProps<
  BusStackParamList,
  'BusStop'
>;
function BusStop({navigation}: BusSearchScreenProps) {
  const toBusNumber = useCallback(() => {
    navigation.navigate('BusNumber');
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <Text>📍 정류장명</Text>
        <Text>인헌시장입구</Text>
        <Text>21562(정류장 넘버)</Text>
        <Text>389m(현재 위치와의 거리)</Text>
      </View>
      <View>
        <Pressable>
          <Text>버스 정류장 변경</Text>
        </Pressable>
      </View>
      <View>
        <Pressable onPress={toBusNumber} style={styles.button}>
          <Text>버스번호 입력</Text>
        </Pressable>
      </View>
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
export default BusStop;
