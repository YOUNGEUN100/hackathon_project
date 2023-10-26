import {Image, Pressable, Text, Vibration, View} from 'react-native';
import * as React from 'react';
import {theme} from '../../assets/color';
import {styles} from '../../assets/styles';
function BusArrival() {
  const ONE_SECOND_IN_MS = 1000;

  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>인헌시장입구</Text>
      <Text style={{...styles.infoText, color: theme.green}}>관악04</Text>
      <Text style={styles.infoText}>3정류장 전</Text>
      <Text style={styles.infoText}>6분 후 도착예정</Text>
      <Pressable
        style={{marginTop: 30}}
        onPress={() => Vibration.vibrate(2 * ONE_SECOND_IN_MS)}>
        <Image source={require('../../assets/images/camera.png')} />
      </Pressable>
    </View>
  );
}

export default BusArrival;
