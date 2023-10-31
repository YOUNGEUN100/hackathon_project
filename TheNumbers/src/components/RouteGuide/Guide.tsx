import { Text, View } from "react-native";
import * as React from 'react';
import {styles} from '../../assets/styles';
import { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from "../../assets/color";
import busNumber from "../BusSearch/BusNumber";

function Guide() {
  const [item, setItem] = useState<{
    time: string;
    distance: string;
    pathList: unknown;
  } | null>(null);

  const [path, setPath] = useState<{
    routeNm: string;
    fname: string;
    tname: string;
  } | null>(null);

  useEffect(() => {
    fetch(
      `http://ws.bus.go.kr/api/rest/pathinfo/getPathInfoByBus?serviceKey=ec37XMuUDWO4Zxoj4Fx2ewkY5ST2UaW%2BqRBjOZ1TayuGoA%2Fmf3EijLICa14VRjOgBI1Vsk4EkanznggdJwphFA%3D%3D&startX=127.02044434&startY=37.57699652&endX=126.96925493&endY=37.5659461&resultType=json`,
    )
      .then(response => response.json())
      .then(data => {
        console.log(data.msgBody.itemList[0]);
        setItem(data.msgBody.itemList[0]);
        // setPath(
        //   busNumber: item.
        // )
      })
      .catch(error => console.warn(error));
  }, []);

  useEffect(() => {
    console.log(item?.pathList[0]);
    console.log(item?.distance);
    console.log(item?.time);
    setPath({
      routeNm: item?.pathList[0].routeNm,
      fname: item?.pathList[0].fname,
      tname: item?.pathList[0].tname,
    });
  }, [item]);

  return (
    <View style={styles.guideContainer}>
      <View style={styles.zone}>
        <View style={styles.circleBox}>
          <Text style={styles.circleBoxText}>승차</Text>
        </View>
        <Text style={styles.text}>{path?.fname}</Text>
      </View>
      <View style={styles.zone}>
        <Icon name='bus' size={30} color={theme.white} />
        <Text style={styles.text}>{path?.routeNm}</Text>
      </View>
      <Text style={{...styles.text, paddingLeft: 70}}>{item?.time} 분 소요</Text>
      <View style={styles.zone}>
        <View style={styles.circleBox}>
          <Text style={styles.circleBoxText}>하차</Text>
        </View>
        <Text style={styles.text}>{path?.tname}</Text>
      </View>
    </View>
  );
}
export default Guide;
