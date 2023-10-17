import {StyleSheet, Text, View} from 'react-native';
import * as React from 'react';
function BusArrival() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>인헌시장입구</Text>
      <Text>관악04</Text>
      <Text>3정류장 전</Text>
      <Text>6분 후 도착예정</Text>
      <Text style={styles.camera}>카메라</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
export default BusArrival;
