import ProfileIcon from '@/components/ProfileIcon';
import React from 'react';
import { View, Text } from 'react-native';

const Profile = () => (
  <View style={{ flex: 1, backgroundColor: 'white' }}>
    <ProfileIcon />
    <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', color: '#black' }}>Profile 画面</Text>
  </View>
);

export default Profile;