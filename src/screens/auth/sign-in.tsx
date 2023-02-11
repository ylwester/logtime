import React from 'react'
import { View } from 'react-native'
import StyledText from 'components/common/styled-text'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignIn = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'center',
      }}
    >
      <View>
        <StyledText>Hello from SignIn screen</StyledText>
      </View>
    </SafeAreaView>
  )
}

export default SignIn
