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
        <Pressable onPress={busTap} style={styles.topButtonLeft}>
          <Text>버스찾기</Text>
        </Pressable>
        <Pressable onPress={routeTap} style={styles.topButtonRight}>
          <Text>길안내</Text>
        </Pressable>
      </View>
      <ScrollView style={styles.scrollView}>
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
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: theme.bg,
  },
  header: {
    //flex: 1,
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    //justifyContent: 'space-around',
    // marginTop: 100,
    backgroundColor: theme.yellow,
  },
  scrollView: {
    //flex: 2,    
    width: '100%',
    height: '90%',
    //flexDirection: 'row',
    //justifyContent: 'space-around',
    // marginTop: 100,
    backgroundColor: theme.gray,
  },
  topButton: {
    //paddingVertical: 20,
  },
  topButtonLeft: {
    flex: 1,
    //width : "50%",
    //height : 70
    //flex: 1,
    backgroundColor: theme.red,
  },
  topButtonRight: {
    flex: 1,
    //width : "50%",
    //height : 70
    //flex: 1,
    backgroundColor: theme.green,
  },
});
export default SearchHistoryScreen;