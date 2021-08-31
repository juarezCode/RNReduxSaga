import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  ActivityIndicator,
  FlatList,
  View,
  Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotosByAlbum } from '../store/actions/user-photos.actions';
import { selectPhotosState } from '../store/selectors/user-photos.selectors';
import { AlertError } from '../utils/alerts';

const PhotosScreen = ({ route: { params } }) => {
  const dispatch = useDispatch();
  const { id: albumId } = params;

  const { photos, loading, error } = useSelector(selectPhotosState);

  useEffect(() => {
    dispatch(getPhotosByAlbum(albumId));
  }, [, dispatch]);

  if (error) AlertError(error);

  return (
    <>
      <Text style={{ ...styles.text, ...styles.title }}>Photos</Text>
      {loading && <ActivityIndicator size="large" color={'black'} />}

      {photos.length > 0 && (
        <FlatList
          data={photos}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image
                source={{ uri: item.thumbnailUrl }}
                style={{ width: '100%', height: 100 }}
              />
              <Text style={styles.text}>{item.title}</Text>
            </View>
          )}
        />
      )}
    </>
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
    flex: 0.5,
    alignItems: 'center',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    backgroundColor: 'teal',
    color: 'white',
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
});

export default PhotosScreen;
