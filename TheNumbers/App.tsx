import * as React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from "react-native";
import BusSearchScreen from './src/pages/BusSearchScreen';
import RouteGuideScreen from './src/pages/RouteGuideScreen';
import SearchHistoryScreen from './src/pages/SearchHistoryScreen';
import Setting from './src/pages/Setting';

// 페이지의 목록
type RootStackParamList = {
  Home: undefined; // 페이지에 파라미터로 넣어줄 것이 없으면 'undefined'
  Setting: undefined;
  BusSearch: undefined;
  RouteGuide: undefined;
  SearchHistory: undefined;
};
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
// type DetailsScreenProps = NativeStackScreenProps<ParamListBase, 'Details'>;

function HomeScreen({navigation}: HomeScreenProps) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Pressable onPress={() => navigation.navigate('Setting')}>
        <Text>환경설정</Text>
      </Pressable>
      <Text style={styles.titleText}>넘버스</Text>
      <View style={styles.screenButtonZoon}>
        <Pressable onPress={() => navigation.navigate('BusSearch')} style={styles.screenButton}>
          <Text style={styles.screenButtonText}>버스찾기</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('RouteGuide')} style={styles.screenButton}>
          <Text style={styles.screenButtonText}>길안내</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('SearchHistory')} style={styles.screenButton}>
          <Text style={styles.screenButtonText}>검색내역</Text>
        </Pressable>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview', headerShown: false}}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{title: '환경설정'}}
        />
        <Stack.Screen
          name="BusSearch"
          component={BusSearchScreen}
          options={{title: '버스찾기', headerShown: false}}
        />
        <Stack.Screen
          name="RouteGuide"
          component={RouteGuideScreen}
          options={{title: '길안내' , headerShown: false}}
        />
        <Stack.Screen
          name="SearchHistory"
          component={SearchHistoryScreen}
          options={{title: '검색내역'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 35,
  },
  screenButtonZoon: {
    marginTop: 30,
  },
  screenButton: {
    backgroundColor: 'gray',
    paddingHorizontal: 80,
    paddingVertical: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  screenButtonText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
