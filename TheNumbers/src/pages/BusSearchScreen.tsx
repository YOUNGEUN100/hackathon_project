import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BusStop from '../components/BusSearch/BusStop';
import BusNumber from '../components/BusSearch/BusNumber';
import BusArrival from '../components/BusSearch/BusArrival';

// 페이지의 목록
export type BusStackParamList = {
  BusSearch: undefined;
  BusStop: undefined;
  BusNumber: undefined;
  BusArrival: undefined;
};

const Stack = createNativeStackNavigator<BusStackParamList>();

function BusSearchScreen() {
  return (
    <Stack.Navigator initialRouteName="BusStop">
      <Stack.Screen
        name="BusStop"
        component={BusStop}
        options={{title: '버스 정류장'}}
      />
      <Stack.Screen
        name="BusNumber"
        component={BusNumber}
        options={{title: '버스 번호'}}
      />
      <Stack.Screen
        name="BusArrival"
        component={BusArrival}
        options={{title: '버스 도착 정보'}}
      />
    </Stack.Navigator>
  );
}
export default BusSearchScreen;
