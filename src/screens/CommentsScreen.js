import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentsByPost } from '../store/actions/posts/comments.actions';
import {
  selectComments,
  selectCommentsLoading,
  selectCommentsError,
} from '../store/selectors/posts/comments.selectors';
import { AlertError } from '../utils/alerts';

const CommentsScreen = ({ route: { params } }) => {
  const { postId } = params;
  const dispatch = useDispatch();

  const comments = useSelector(selectComments);
  const loading = useSelector(selectCommentsLoading);
  const error = useSelector(selectCommentsError);

  useEffect(() => {
    dispatch(getCommentsByPost(postId));
  }, [, dispatch]);

  if (error) AlertError(error);

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ ...styles.text, ...styles.title }}>Comments</Text>
      {loading && <ActivityIndicator size="large" color="black" />}
      {comments.length > 0 && (
        <FlatList
          data={comments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.text}>{item.body}</Text>
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
    margin: 10,
    backgroundColor: 'teal',
    color: 'white',
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
});

export default CommentsScreen;
