import React from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from './src/screens/SignIn.tsx';
import Home from './src/screens/Home.tsx';
import Post from './src/screens/Post.tsx';
import Profile from './src/screens/Profile.tsx';
import Footer from './src/components/Footer.tsx';

import { View } from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Stack.Navigator screenOptions={{ animation:'fade', headerShown: false }}>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Post" component={Post} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
        <Footer />
      </View>
    </NavigationContainer>
  );
}

export default registerRootComponent(App);