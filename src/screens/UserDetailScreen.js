import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { getUserDetail } from '../store/actions/user-detail.actions';
import {
  selectUser,
  selectUserDetailLoading,
} from '../store/selectors/user-detail.selectors';
import {
  selectPosts,
  selectPostsLoading,
} from '../store/selectors/user-posts.selectors';
import { getPostByUser } from '../store/actions/user-posts.actions';

const UserDetailScreen = ({ route }) => {
  const user = useSelector(selectUser);
  const loading = useSelector(selectUserDetailLoading);
  const posts = useSelector(selectPosts);
  const loadingPosts = useSelector(selectPostsLoading);
  const dispatch = useDispatch();
  const { id } = route.params;

  useEffect(() => {
    dispatch(getUserDetail(id));
    dispatch(getPostByUser(id));
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
