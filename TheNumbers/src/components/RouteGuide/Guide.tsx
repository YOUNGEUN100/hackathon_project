import {Text, View} from 'react-native';
import * as React from 'react';
function Guide() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <Text>승차</Text>
        <Text>낙성대입구 정류장</Text>
      </View>
      <View>
        <Text>643번 버스</Text>
        <Text>7정거장</Text>
      </View>
      <View>
        <Text>하차</Text>
        <Text>구로디지털단지역 정류장</Text>
      </View>
    </View>
  );
}
export default Guide;
