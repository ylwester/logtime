import React, { useCallback } from 'react'
import { StyleSheet, View } from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { ThemeProvider } from '@rneui/themed'
import { theme } from './theme'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import ScreensHandler from './src/screens'
import { NavigationContainer } from '@react-navigation/native'

SplashScreen.preventAutoHideAsync()

const App = () => {
  const [fontsLoaded] = useFonts({
    Roboto: require('./src/assets/fonts/Roboto-Regular.ttf'),
    RobotoBold: require('./src/assets/fonts/Roboto-Bold.ttf'),
    RobotoLight: require('./src/assets/fonts/Roboto-Light.ttf'),
    RobotoSemiBold: require('./src/assets/fonts/Roboto-Medium.ttf'),
    RobotoBlack: require('./src/assets/fonts/Roboto-Black.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <View style={[styles.container]} onLayout={onLayoutRootView}>
            <ScreensHandler />
          </View>
        </ThemeProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
