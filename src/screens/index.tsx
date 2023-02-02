import LoginWelcome from './login-welcome'
import React from 'react'
import { useTheme } from '@rneui/themed'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'

const ScreensHandler = () => {
  const { theme } = useTheme()
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme.colors.background },
        { flex: 1, alignItems: 'center', justifyContent: 'center' },
      ]}
    >
      <LoginWelcome />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default ScreensHandler
