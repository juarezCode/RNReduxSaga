import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  CharactersScreenName,
  UsersScreenName,
} from '../navigations/AppNavigator';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(UsersScreenName)}>
        <Text style={{ color: 'white' }}>Ver usuarios</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(CharactersScreenName)}>
        <Text style={{ color: 'white' }}>Ver personajes de Rick y Morty</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    height: 50,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal',
    marginHorizontal: 4,
    marginTop: 2,
  },
});

export default HomeScreen;
