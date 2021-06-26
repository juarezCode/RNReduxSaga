import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from '../components/UserCard';
import { UserDetailScreenName } from '../navigations/AppNavigator';
import { getUsers } from '../store/actions/users.actions';
import {
  selectUsersError,
  selectUsersLoading,
  selectUsers,
} from '../store/selectors/users.selectors';
import { AlertError } from '../utils/alerts';

const UsersScreen = ({ navigation }) => {
  const users = useSelector(selectUsers);
  const loading = useSelector(selectUsersLoading);
  const error = useSelector(selectUsersError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [, dispatch]);

  if (error) AlertError(error);

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ ...styles.text, ...styles.title }}>Usuarios</Text>
      {loading && <ActivityIndicator size="large" color={'black'} />}
      {users.length > 0 && (
        <FlatList
          data={users}
          keyExtractor={user => user.id}
          renderItem={({ item }) => (
            <UserCard
              user={item}
              goUserDetail={() =>
                navigation.navigate(UserDetailScreenName, { id: item.id })
              }
            />
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
  text: {
    textAlign: 'center',
  },
});

export default UsersScreen;
