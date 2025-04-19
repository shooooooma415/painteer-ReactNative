import React from 'react';
import { View, Text } from 'react-native';
import GoogleSignIn from '../components/GoogleSignIn.tsx';

const SignIn = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
    <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', color: '#000' }}>Sign In</Text>
    <GoogleSignIn />
  </View>
);

export default SignIn;