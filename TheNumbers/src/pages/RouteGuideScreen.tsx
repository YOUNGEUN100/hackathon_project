import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Departure from '../components/RouteGuide/Departure';
import Destination from '../components/RouteGuide/Destination';
import CheckLocation from '../components/RouteGuide/CheckLocation';
import ChooseRoute from '../components/RouteGuide/ChooseRoute';
import Guide from '../components/RouteGuide/Guide';

// 페이지의 목록
export type GuideStackParamList = {
  ChooseRoute: undefined;
  Departure: undefined;
  Destination: undefined;
  CheckLocation: undefined;
  Guide: undefined;
};

const Stack = createNativeStackNavigator<GuideStackParamList>();

function RouteGuideScreen() {
  return (
    <Stack.Navigator initialRouteName="Departure">
      <Stack.Screen
        name="Departure"
        component={Departure}
        options={{title: '출발지 설정'}}
      />
      <Stack.Screen
        name="Destination"
        component={Destination}
        options={{title: '목적지 설정'}}
      />
      <Stack.Screen
        name="CheckLocation"
        component={CheckLocation}
        options={{title: '길 설정'}}
      />
      <Stack.Screen
        name="ChooseRoute"
        component={ChooseRoute}
        options={{title: '경로 선택'}}
      />
      <Stack.Screen
        name="Guide"
        component={Guide}
        options={{title: '길안내'}}
      />
    </Stack.Navigator>
  );
}
export default RouteGuideScreen;
