import React, { useEffect } from 'react';
import { Text, View, ActivityIndicator, Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacterDetail } from '../../store/actions/rick-and-morty/character-detail.actions';
import {
  selectCharacterDetail,
  selectCharacterDetailError,
  selectCharacterDetailLoading,
} from '../../store/selectors/rick-and-morty/character-detail.selectors';
import { AlertError } from '../../utils/alerts';

const CharacterDetailScreen = ({ route: { params } }) => {
  const { characterId } = params;
  const dispatch = useDispatch();

  const character = useSelector(selectCharacterDetail);
  const loading = useSelector(selectCharacterDetailLoading);
  const error = useSelector(selectCharacterDetailError);

  useEffect(() => {
    dispatch(getCharacterDetail(characterId));
  }, [dispatch]);

  if (error) AlertError(error);

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      {loading && <ActivityIndicator size="large" color="black" />}
      {character && (
        <View style={{ width: '100%' }}>
          <Image source={{ uri: character.image }} style={styles.image} />
          <View style={styles.body}>
            <Text style={styles.text}>name: {character.name}</Text>
            <Text style={styles.text}>status: {character.status}</Text>
            <Text style={styles.text}>species: {character.species}</Text>
            <Text style={styles.text}>gender: {character.gender}</Text>
            <Text style={styles.text}>origin: {character.origin.name}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
  },
  body: {
    padding: 10,
    flex: 1,
  },
  text: {
    color: 'teal',
    fontSize: 20,
  },
});

export default CharacterDetailScreen;
