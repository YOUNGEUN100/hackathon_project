import {Pressable, StyleSheet, Text, View, ScrollView} from 'react-native';
import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';

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
    <View>
      <View style={styles.header}>
        <Pressable onPress={busTap}>
          <Text>버스찾기</Text>
        </Pressable>
        <Pressable onPress={routeTap}>
          <Text>길안내</Text>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 100,
  },
});
export default SearchHistoryScreen;
