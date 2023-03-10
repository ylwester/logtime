import React from 'react'
import StyledText from 'components/common/styled-text'
import { SafeAreaView } from 'react-native-safe-area-context'
import StyledButton from 'components/common/Button'
import useAuth from '../hooks/use-auth'
import TasksList from 'components/ tasks/list'

const Home = () => {
  const { handleLogout } = useAuth()
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 10,
        alignItems: 'center',
      }}
    >
      <StyledText>Hello from Home Screen</StyledText>
      <StyledButton onPress={handleLogout}>
        <StyledText>Logout</StyledText>
      </StyledButton>
      <TasksList />
    </SafeAreaView>
  )
}

export default Home
