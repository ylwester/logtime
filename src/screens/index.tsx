import LoginWelcome from './auth/login-welcome'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './home'
import SignIn from './auth/sign-in'
import SignUp from './auth/sign-up'
import useAuth from '../hooks/use-auth'

export type RootStackParamList = {
  'Sign up': undefined
  Welcome: undefined
  'Sign in': undefined
  Home: undefined
}

const RootStack = createNativeStackNavigator<RootStackParamList>()

const ScreensHandler = () => {
  const { user } = useAuth()

  return (
    <RootStack.Navigator initialRouteName="Welcome">
      {user ? (
        <RootStack.Screen name="Home" component={Home} />
      ) : (
        <RootStack.Group>
          <RootStack.Screen
            name="Welcome"
            component={LoginWelcome}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen name="Sign in" component={SignIn} />
          <RootStack.Screen name="Sign up" component={SignUp} />
        </RootStack.Group>
      )}
    </RootStack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default ScreensHandler
