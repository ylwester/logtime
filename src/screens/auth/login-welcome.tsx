import React from 'react'
import { Image, StyleSheet, useWindowDimensions, View } from 'react-native'
import StyledText from 'components/common/styled-text'
import StyledButton from 'components/common/Button'
import { useTheme } from '@rneui/themed'
import { Button } from '@rneui/base'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../index'

// TODO change logo text with logo or add picture instead

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>

const LoginWelcome = ({ navigation }: Props) => {
  const { theme } = useTheme()
  const { width } = useWindowDimensions()

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.background,
      }}
    >
      <Image
        style={{
          width: '100%',
          maxWidth: 350,
          maxHeight: 300,
          alignSelf: 'center',
          aspectRatio: 1.6,
        }}
        source={require('assets/images/welcome-image.png')}
      />
      <StyledText
        weight="extrabold"
        style={{
          fontSize: 24,
          marginBottom: 16,
        }}
      >
        LogTime
      </StyledText>
      <StyledText
        style={{
          marginBottom: 16,
          textAlign: 'center',
          color: theme.colors.grey1,
          paddingHorizontal: 20,
        }}
      >
        We can help you make progress in your life. Start tracking time spent on
        goals.
      </StyledText>
      <View
        style={{
          maxWidth: 380,
          width,
          marginBottom: 16,
          paddingHorizontal: 16,
        }}
      >
        <StyledButton
          style={{
            alignSelf: 'stretch',
            padding: 20,
          }}
        >
          <StyledText
            weight="bold"
            style={{
              color: theme.colors.white,
            }}
          >
            Sign in
          </StyledText>
        </StyledButton>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 16,
          paddingHorizontal: 20,
        }}
      >
        <StyledText
          style={{
            color: theme.colors.grey1,
          }}
        >
          Don't have an account yet?
        </StyledText>
        <Button
          type="clear"
          size="sm"
          titleStyle={{
            fontSize: 14,
          }}
          onPress={() => {
            navigation.navigate('Sign up')
          }}
        >
          Sign up
        </Button>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: 380,
          width,
          marginBottom: 16,
        }}
      >
        <View
          style={[styles.divider, { borderBottomColor: theme.colors.grey3 }]}
        />
        <StyledText
          style={{
            color: theme.colors.grey3,
            paddingHorizontal: 14,
          }}
        >
          or
        </StyledText>
        <View
          style={[styles.divider, { borderBottomColor: theme.colors.grey3 }]}
        />
      </View>
      <View
        style={{
          maxWidth: 380,
          width,
          marginBottom: 16,
          paddingHorizontal: 16,
        }}
      >
        <StyledButton
          style={[
            styles.iconButton,
            {
              backgroundColor: theme.colors.white,
              borderWidth: StyleSheet.hairlineWidth,
              borderColor: theme.colors.greyOutline,
            },
          ]}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Image
              style={styles.icon}
              source={require('assets/images/google.png')}
            />

            <StyledText
              style={{
                alignSelf: 'center',
                color: theme.colors.grey1,
              }}
            >
              Continue with Google
            </StyledText>
          </View>
        </StyledButton>
      </View>
      <View
        style={{
          maxWidth: 380,
          width,
          marginBottom: 8,
          paddingHorizontal: 16,
        }}
      >
        <StyledButton
          style={[
            styles.iconButton,
            {
              backgroundColor: theme.colors.white,
              borderWidth: StyleSheet.hairlineWidth,
              borderColor: theme.colors.greyOutline,
            },
          ]}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Image
              style={styles.icon}
              source={require('assets/images/facebook.png')}
            />

            <StyledText
              style={{
                alignSelf: 'center',
                color: theme.colors.grey1,
              }}
            >
              Continue with Facebook
            </StyledText>
          </View>
        </StyledButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: '40%',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 6,
    alignSelf: 'center',
  },
  iconButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 0,
    paddingTop: 4,
    height: 57,
  },
})

export default LoginWelcome
