import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home.js';
import Post from './src/screens/Post.js';
import Profile from './src/screens/Profile.js';
import Footer from './src/components/Footer.js';

import { View } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Stack.Navigator screenOptions={{ animation:'fade', headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Post" component={Post} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
        <Footer />
      </View>
    </NavigationContainer>
  );
}