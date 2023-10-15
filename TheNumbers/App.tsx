import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppInner from './AppInner';

function App() {
  return (
    <NavigationContainer>
      <AppInner />
    </NavigationContainer>
  );
}

export default App;
