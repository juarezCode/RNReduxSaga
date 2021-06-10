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
import { getUsers } from '../store/actions/user.actions';
import {
  selectUserLoading,
  selectUsers,
} from '../store/selectors/user.selectors';

const UserScreen = ({ navigation }) => {
  const users = useSelector(selectUsers);
  const loading = useSelector(selectUserLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [, dispatch]);

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ ...styles.text, ...styles.title }}>Usuarios</Text>
      {loading ? <ActivityIndicator size="large" color={'black'} /> : null}
      {users.length == 0 ? null : (
        <FlatList
          data={users}
          keyExtractor={user => user.id}
          renderItem={({ item }) => (
            <UserCard
              user={item}
              goUserDetail={() =>
                navigation.navigate('UserDetail', { id: item.id })
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

export default UserScreen;
