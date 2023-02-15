import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import StyledText from 'components/common/styled-text'
import { useTheme } from '@rneui/themed'

type Props = {
  taskData: any
  onPress: () => void
}

const TaskItem = ({ taskData, onPress }: Props) => {
  const { theme } = useTheme()

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <StyledText>{taskData.name}</StyledText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    padding: 8,
    marginBottom: 4,
  },
})

export default TaskItem
