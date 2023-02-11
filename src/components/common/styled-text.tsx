import { StyleSheet, Text, TextProps } from 'react-native'
import React, { ReactNode } from 'react'
import { useTheme } from '@rneui/themed'

type Props = {
  children: ReactNode
  weight?: 'light' | 'regular' | 'semibold' | 'bold' | 'extrabold'
} & TextProps

const StyledText = ({
  children,
  weight = 'regular',
  style,
  ...rest
}: Props) => {
  const { theme } = useTheme()
  return (
    <Text
      style={[styles[weight], { color: theme.colors.grey0 }, style]}
      {...rest}
    >
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  light: {
    fontFamily: 'RobotoLight',
  },
  regular: {
    fontFamily: 'Roboto',
  },
  semibold: {
    fontFamily: 'RobotoSemiBold',
  },
  bold: {
    fontFamily: 'RobotoBold',
  },
  extrabold: {
    fontFamily: 'RobotoBlack',
  },
})

export default StyledText
