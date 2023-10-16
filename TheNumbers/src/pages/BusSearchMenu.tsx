import {Text, View, Pressable} from 'react-native';
import * as React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import BusStop from './BusStop';
import BusNumber from './BusNumber';

// 페이지의 목록
type RootStackParamList = {
  BusSearch: undefined;
  BusStop: undefined;
  BusNumber: undefined;
};
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'BusSearch'>;

function BusSearchHome({navigation}: HomeScreenProps) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>버스 찾기</Text>
      <Pressable onPress={() => navigation.navigate('BusStop')}>
        <Text>버스 정류장</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('BusNumber')}>
        <Text>버스 번호</Text>
      </Pressable>
    </View>
  );
}


const Stack = createNativeStackNavigator<RootStackParamList>();

function BusSearchMenu() {
  return (
    <Stack.Navigator initialRouteName='BusSearch'>
      <Stack.Screen
        name='BusSearch'
        component={BusSearchHome}
        options={{title: '버스 찾기 메뉴' , headerShown: false}}
      />
      <Stack.Screen name='BusStop' component={BusStop} options={{title:'버스 정류장'}}/>
      <Stack.Screen name='BusNumber' component={BusNumber} options={{title: '버스 번호'}}/>
    </Stack.Navigator>
  );
}
export default BusSearchMenu;
