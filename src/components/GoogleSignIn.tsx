import React from 'react'
import { View, Button, StyleSheet, Alert } from 'react-native'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { getAuth, GoogleAuthProvider, signInWithCredential } from 'firebase/auth'
import { firebaseApp,firebaseConfig } from '../libs/firebase.ts'

GoogleSignin.configure({
  webClientId: firebaseConfig.clientId,
})

export default function GoogleSignIn() {
  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices()
      const userInfo = await GoogleSignin.signIn()
      const { idToken } = await GoogleSignin.getTokens()

      const auth = getAuth(firebaseApp)
      const credential = GoogleAuthProvider.credential(idToken)
      await signInWithCredential(auth, credential)

      console.log('ログイン成功')
    } catch (error) {
      console.log('ログイン失敗', error)
      Alert.alert('ログイン失敗')
    }
  }

  return (
    <View style={styles.container}>
      <Button title="Googleでログイン" onPress={handleGoogleSignIn} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
}) 