import * as React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Pressable, Text, View} from 'react-native';
import BusSearchMenu from './src/pages/BusSearchMenu';
import DirectionsMenu from './src/pages/DirectionsMenu';
import SearchHistoryMenu from './src/pages/SearchHistoryMenu';
import Setting from './src/pages/Setting';

// 페이지의 목록
type RootStackParamList = {
  Home: undefined; // 페이지에 파라미터로 넣어줄 것이 없으면 'undefined'
  Setting: undefined;
  BusSearch: undefined;
  Directions: undefined;
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
      <Text>넘버스</Text>
      <Pressable onPress={() => navigation.navigate('BusSearch')}>
        <Text>버스찾기</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Directions')}>
        <Text>길안내</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('SearchHistory')}>
        <Text>검색내역</Text>
      </Pressable>
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
        name='Setting'
        component={Setting}
        options={{title: '환경설정'}}
      />
      <Stack.Screen
        name="BusSearch"
        component={BusSearchMenu}
        options={{title: '버스찾기', headerShown: false}}
      />
      <Stack.Screen
        name="Directions"
        component={DirectionsMenu}
        options={{title: '길안내'}}
      />
      <Stack.Screen
        name="SearchHistory"
        component={SearchHistoryMenu}
        options={{title: '검색내역'}}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
