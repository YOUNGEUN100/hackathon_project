import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import * as React from 'react';
import {theme} from '../../assets/color';
import { styles } from "../../assets/styles";
import cameraImg from '../../assets/images/camera.png';
function BusArrival() {
  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>인헌시장입구</Text>
      <Text style={{...styles.infoText, color: theme.green}}>관악04</Text>
      <Text style={styles.infoText}>3정류장 전</Text>
      <Text style={styles.infoText}>6분 후 도착예정</Text>
      <Pressable style={{marginTop: 30}}>
        <Image source={cameraImg} />
      </Pressable>
    </View>
  );
}


export default BusArrival;
