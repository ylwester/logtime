import React, { ReactNode } from 'react'
import { PressableProps, StyleSheet, ViewStyle } from 'react-native'
import StyledText from 'components/common/styled-text'
import PressableOpacity from 'components/common/pressable-opacity'
import { useTheme } from '@rneui/themed'

type Props = {
  children: ReactNode
  style?: ViewStyle
} & PressableProps

const StyledButton = ({ children, disabled, style, ...props }: Props) => {
  const { theme } = useTheme()
  return (
    <PressableOpacity
      disabled={disabled}
      style={[
        {
          backgroundColor: disabled
            ? theme.colors.disabled
            : theme.colors.primary,
        },
        styles.container,
        style,
      ]}
      {...props}
    >
      <StyledText weight="semibold">{children}</StyledText>
    </PressableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 6,
    alignItems: 'center',
    alignSelf: 'stretch',
  },
})
export default StyledButton
