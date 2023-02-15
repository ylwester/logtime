import LoginWelcome from './auth/login-welcome'
import React from 'react'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './home'
import SignIn from './auth/sign-in'
import SignUp from './auth/sign-up'
import useAuth from '../hooks/use-auth'
import TaskScreen from './task-screen'

export type RootStackParamList = {
  'Sign up': undefined
  Welcome: undefined
  'Sign in': undefined
  Home: undefined
  TaskScreen: undefined
}

const RootStack = createNativeStackNavigator<RootStackParamList>()

const ScreensHandler = () => {
  const { user } = useAuth()

  return (
    <RootStack.Navigator initialRouteName="Welcome">
      {user ? (
        <RootStack.Group>
          <RootStack.Screen name="Home" component={Home} />
          <RootStack.Screen name="TaskScreen" component={TaskScreen} />
        </RootStack.Group>
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
