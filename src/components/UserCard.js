import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const UserCard = ({ user, goUserDetail }) => {
  return (
    <TouchableOpacity onPress={() => goUserDetail()} style={styles.card}>
      <Text style={{ ...styles.text, color: 'white' }}>{user.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    padding: 10,
    backgroundColor: 'teal',
    marginTop: 4,
    marginHorizontal: 4,
  },
  text: {
    textAlign: 'center',
  },
});

export default UserCard;
