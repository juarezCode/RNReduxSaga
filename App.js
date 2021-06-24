import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './src/navigations/AppNavigator';

const Stack = createStackNavigator();

const App = () => {
  return <AppNavigator />;
};

export default App;
