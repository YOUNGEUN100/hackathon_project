import {Pressable, StyleSheet, Text, View, ScrollView} from 'react-native';
import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import {theme} from '../assets/color';

function SearchHistoryScreen() {
  const [tap, setTap] = useState('bus'); // Work(true), Travel(false) 탭이동
  const [content, setContent] = useState({}); // 할일 목록들

  const busTap = () => {
    setTap('bus');
    AsyncStorage.setItem('tap', 'bus');
  };
  const routeTap = () => {
    setTap('route');
    AsyncStorage.setItem('tap', 'route');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={busTap}>
          <Text  style={[styles.topButton,styles.topButtonLeft]}>버스찾기</Text>
        </Pressable>
        <Pressable onPress={routeTap}>
          <Text  style={[styles.topButton,styles.topButtonRight]}>길안내</Text>
        </Pressable>
      </View>
      <ScrollView>
        <View>
          <Text>금천05번</Text>
        </View>
        <View>
          <Text>5630</Text>
        </View>
        <View>
          <Text>150</Text>
        </View>
        <View>
          <Text>5355</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.bg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // marginTop: 100,
  },
  topButton: {
    backgroundColor: theme.yellow,
    paddingVertical: 20,
  },
  topButtonLeft: {
    width : "50%",
    height : "10%"
  },
  topButtonRight: {
    width : "50%",
    height : "10%"
  },
});
export default SearchHistoryScreen;
