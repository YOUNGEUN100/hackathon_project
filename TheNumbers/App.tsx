import * as React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import BusSearchScreen from './src/pages/BusSearchScreen';
import RouteGuideScreen from './src/pages/RouteGuideScreen';
import SearchHistoryScreen from './src/pages/SearchHistoryScreen';
import Setting from './src/pages/Setting';
import usePermissions from './src/hooks/usePermissions';
import {theme} from './src/assets/color';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import Tts from 'react-native-tts';
import { styles } from "./src/assets/styles";

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

  const [count, setCount] = React.useState(0);
  const onClick = () => {
    if (count == 1) {
      navigation.navigate('BusSearch');
      setCount(0);
    } else {
      Tts.setDefaultLanguage('ko-KR');
      Tts.speak('버스찾기');
      setCount(count + 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>넘버스</Text>
        <Icon name="bus" size={60} color={theme.white}/>
      </View>
      <View style={styles.buttonZone}>
        <Pressable
          onPress={() => {
            onClick();
          }}
          style={styles.screenButton}>
          <Icon name="bus-sharp" size={40} color={theme.black}/>
          <Text style={styles.screenButtonText}>버스안내</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('RouteGuide')}
          style={styles.screenButton}>
          <IconMCI name="road" size={40} color={theme.black}/>
          <Text style={styles.screenButtonText}>길안내</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('SearchHistory')}
          style={styles.screenButton}>
          <Icon name='list' size={40} color={theme.black} />
          <Text style={styles.screenButtonText}>검색내역</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Setting')} style={styles.screenButton}>
          <Icon name="settings-outline" size={40} color={theme.black}/>
          <Text style={styles.screenButtonText}>환경설정</Text>
        </Pressable>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();
function App() {
  usePermissions();

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
          options={{title: '길안내', headerShown: false}}
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


export default App;
