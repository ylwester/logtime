import React from 'react'
import { StyleSheet, TextInput, useWindowDimensions, View } from 'react-native'
import StyledText from 'components/common/styled-text'
import { Controller, useForm } from 'react-hook-form'
import { useTheme } from '@rneui/themed'
import StyledButton from 'components/common/Button'
import useAuth, { SignUpProps } from '../../hooks/use-auth'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const SignUpSchema = yup.object({
  email: yup.string().required('Email is required').email('Must be an email'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  confirmPassword: yup
    .string()
    .test('passwordMatch', 'Passwords must match', function (value) {
      return this.parent.password === value
    }),
})

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  })
  const { height, width } = useWindowDimensions()
  const { theme } = useTheme()
  const { handleSignUp } = useAuth()

  console.log(errors)

  const onSubmit = async ({ email, password }: SignUpProps) => {
    await handleSignUp({ email, password })
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: theme.colors.background,
      }}
    >
      <View
        style={{
          marginBottom: height / 12,
          marginTop: height / 12,
        }}
      >
        <StyledText
          weight="semibold"
          style={{
            fontSize: 32,
          }}
        >
          LogTime
        </StyledText>
      </View>
      <View style={{ marginBottom: 16 }}>
        <StyledText style={styles.label}>Email</StyledText>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="name@domain.com"
              autoCapitalize="none"
              style={[
                styles.input,
                {
                  width: width - 40,
                  borderColor: theme.colors.greyOutline,
                  backgroundColor: theme.colors.white,
                  color: theme.colors.grey0,
                },
              ]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />
        {errors.email && (
          <StyledText
            style={[styles.textError, { color: theme.colors.errorRed }]}
          >
            {errors.email.message}
          </StyledText>
        )}
      </View>
      <View
        style={{
          marginBottom: 16,
        }}
      >
        <StyledText style={styles.label}>Password</StyledText>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              autoCapitalize="none"
              textContentType="password"
              secureTextEntry
              placeholder="Enter your password"
              style={[
                styles.input,
                {
                  width: width - 40,
                  borderColor: theme.colors.greyOutline,
                  backgroundColor: theme.colors.white,
                  color: theme.colors.grey0,
                },
              ]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />
        {errors.password && (
          <StyledText
            style={[styles.textError, { color: theme.colors.errorRed }]}
          >
            {errors.password.message}
          </StyledText>
        )}
      </View>
      <View
        style={{
          marginBottom: 16,
        }}
      >
        <StyledText style={styles.label}>Confirm password</StyledText>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              autoCapitalize="none"
              textContentType="password"
              secureTextEntry
              placeholder="Enter your password"
              style={[
                styles.input,
                {
                  width: width - 40,
                  borderColor: theme.colors.greyOutline,
                  backgroundColor: theme.colors.white,
                  color: theme.colors.grey0,
                },
              ]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="confirmPassword"
        />
        {errors.confirmPassword && (
          <StyledText
            style={[styles.textError, { color: theme.colors.errorRed }]}
          >
            {errors.confirmPassword.message}
          </StyledText>
        )}
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
          disabled={!isValid}
          style={{
            alignSelf: 'stretch',
            padding: 20,
          }}
          onPress={handleSubmit(onSubmit)}
        >
          <StyledText
            weight="bold"
            style={{
              color: theme.colors.white,
            }}
          >
            Create an account
          </StyledText>
        </StyledButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 2,
    fontSize: 14,
  },
  input: {
    height: 50,
    marginVertical: 4,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 8,
    fontFamily: 'Roboto',
  },
  textError: {
    fontSize: 12,
  },
})

export default SignUp
