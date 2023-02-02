import React, { ReactNode } from 'react'
import {
  Pressable,
  Animated,
  Easing,
  PressableProps,
  ViewStyle,
} from 'react-native'

type Props = {
  children: ReactNode
  style: ViewStyle
  pressableStyle?: ViewStyle
} & PressableProps

const PressableOpacity = ({
  children,
  style,
  pressableStyle,
  ...props
}: Props) => {
  const animated = new Animated.Value(1)
  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: 0.2,
      duration: 150,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start()
  }
  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start()
  }

  return (
    <Pressable
      onPressIn={fadeIn}
      onPressOut={fadeOut}
      style={[{ alignSelf: 'stretch' }, pressableStyle]}
      {...props}
    >
      <Animated.View style={[{ opacity: animated }, style]}>
        {children}
      </Animated.View>
    </Pressable>
  )
}

export default PressableOpacity
