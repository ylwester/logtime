import { StyleSheet, Text, TextProps } from 'react-native'
import React, { ReactNode } from 'react'

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
  return (
    <Text style={[styles[weight], style]} {...rest}>
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
