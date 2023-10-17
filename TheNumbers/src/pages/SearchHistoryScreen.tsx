import {Text, View} from 'react-native';
import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";

function SearchHistoryScreen() {

  // const [tap, setTap] = useState("bus"); // Work(true), Travel(false) 탭이동
  // const [content, setContent] = useState({}); // 할일 목록들
  //
  // const bus = () => {
  //   setTap("bus");
  //   AsyncStorage.setItem("tap","bus");
  // };
  // const route = () => {
  //   setTap("route");
  //   AsyncStorage.setItem("tap","route");
  // };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>검색내역 화면</Text>
    </View>
  );
}
export default SearchHistoryScreen;
