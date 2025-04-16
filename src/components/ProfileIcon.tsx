import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileIcon = () => (
  <View style={styles.container}>
    <Text style={styles.iconText}>Icon</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 128,
    alignSelf: 'center', // 中央揃え
  },
  iconText: {
    fontSize: 20,
    color: '#fff',
  },
});

export default ProfileIcon;