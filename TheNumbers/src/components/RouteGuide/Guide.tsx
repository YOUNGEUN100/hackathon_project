import {Image, Text, View} from 'react-native';
import * as React from 'react';
import {styles} from '../../assets/styles';
import bus from '../../assets/images/bus.png';
function Guide() {
  return (
    <View style={styles.guideContainer}>
      <View style={styles.zone}>
        <View style={styles.circleBox}>
          <Text style={styles.circleBoxText}>승차</Text>
        </View>
        <Text style={styles.text}>낙성대입구 정류장</Text>
      </View>
      <View style={styles.zone}>
        <Image source={bus} style={styles.imgSize50} />
        <Text style={styles.text}>643번 버스</Text>
      </View>
      <Text style={{...styles.text, paddingLeft: 70}}>7정거장</Text>
      <View style={styles.zone}>
        <View style={styles.circleBox}>
          <Text style={styles.circleBoxText}>하차</Text>
        </View>
        <Text style={styles.text}>구로디지털단지역 정류장</Text>
      </View>
    </View>
  );
}
export default Guide;
