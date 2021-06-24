import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { getUserDetail } from '../store/actions/user-detail.actions';
import { userDetailState } from '../store/selectors/user-detail.selectors';
import { userPostsState } from '../store/selectors/user-posts.selectors';
import { userAlbumsState } from '../store/selectors/user-albums.selectors';
import { getAlbumsByUser } from '../store/actions/user-albums.actions';
import { PhotosScreenName } from '../navigations/AppNavigator';

const UserDetailScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();

  const { user, loading } = useSelector(userDetailState);
  const { posts, loading: loadingPosts } = useSelector(userPostsState);
  const { albums, loading: loadingAlbums } = useSelector(userAlbumsState);
  const { id } = route.params;

  useEffect(() => {
    dispatch(getUserDetail(id));
    dispatch(getAlbumsByUser(id));
  }, [, dispatch]);

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ ...styles.text, ...styles.title }}>
        Detalle de usuario
      </Text>
      {loading ? <ActivityIndicator size="large" color={'black'} /> : null}
      {!user ? null : (
        <View style={styles.card}>
          <Text style={styles.text}>{user.name}</Text>
          <Text style={styles.text}>{user.username}</Text>
          <Text style={styles.text}>{user.email}</Text>
          <Text style={styles.text}>{user.phone}</Text>
          <Text style={styles.text}>{user.website}</Text>
        </View>
      )}
      <Text style={{ ...styles.text, ...styles.title }}>Posts</Text>
      {loadingPosts ? <ActivityIndicator size="large" color={'black'} /> : null}
      {posts.length == 0 ? null : (
        <FlatList
          data={posts}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.text}>{item.title}</Text>
            </View>
          )}
        />
      )}
      <Text style={{ ...styles.text, ...styles.title }}>Albums</Text>
      {loadingAlbums ? (
        <ActivityIndicator size="large" color={'black'} />
      ) : null}
      {albums.length == 0 ? null : (
        <FlatList
          data={albums}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(PhotosScreenName, { id: item.id })
              }
              style={styles.card}>
              <Text style={styles.text}>{item.title}</Text>
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
    borderRadius: 8,
    padding: 10,
    backgroundColor: 'teal',
    marginTop: 4,
    marginHorizontal: 4,
    color: 'white',
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
});

export default UserDetailScreen;
