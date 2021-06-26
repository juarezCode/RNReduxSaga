import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import UserDetailScreen from '../screens/UserDetailScreen';
import UsersScreen from '../screens/UsersScreen';
import PhotosScreen from '../screens/PhotosScreen';
import CommentsScreen from '../screens/CommentsScreen';
import CharactersScreen from '../screens/rick-and-morty/CharactersScreen';
import CharacterDetailScreen from '../screens/rick-and-morty/CharacterDetailScreen';

const Stack = createStackNavigator();
const HomeScreenName = 'Home';
export const UsersScreenName = 'User';
export const UserDetailScreenName = 'UserDetail';
export const PhotosScreenName = 'Photos';
export const CommentsScreenName = 'Comments';
export const CharactersScreenName = 'Characters';
export const CharacterDetailScreenName = 'CharacterDetail';

const AppNavigator = () => {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name={HomeScreenName}
          component={HomeScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name={UsersScreenName}
          component={UsersScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={UserDetailScreenName}
          component={UserDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={PhotosScreenName}
          component={PhotosScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={CommentsScreenName}
          component={CommentsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={CharactersScreenName}
          component={CharactersScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={CharacterDetailScreenName}
          component={CharacterDetailScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
