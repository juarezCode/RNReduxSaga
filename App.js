import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import UserScreen from './src/screens/UserScreen';
import UserDetailScreen from './src/screens/UserDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="User"
          component={UserScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserDetail"
          component={UserDetailScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
