import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../../store/actions/rick-and-morty/characters.actions';
import { AlertError } from '../../utils/alerts';
import { selectCharactersState } from '../../store/selectors/rick-and-morty/characters.selectors';
import { CharacterDetailScreenName } from '../../navigations/AppNavigator';

const CharactersScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const { characters, loading, error } = useSelector(selectCharactersState);

  useEffect(() => {
    dispatch(getCharacters());
  }, [, dispatch]);

  if (error) AlertError(error);

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ ...styles.text, ...styles.title }}>Personajes</Text>
      {loading && <ActivityIndicator size="large" color="black" />}

      {characters.length > 0 && (
        <FlatList
          data={characters}
          numColumns={3}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(CharacterDetailScreenName, {
                  characterId: item.id,
                })
              }
              style={styles.card}>
              <Image
                source={{ uri: item.image }}
                style={{ width: '100%', height: 100 }}
              />
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'black',
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  card: {
    flex: 0.33,
    alignItems: 'center',
    borderRadius: 8,
    margin: 5,
    backgroundColor: 'teal',
    color: 'white',
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
});

export default CharactersScreen;
