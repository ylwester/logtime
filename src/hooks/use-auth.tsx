import { useCallback, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  AuthErrorCodes,
} from 'firebase/auth'
import { auth } from '../../firebase'
import type { User as FirebaseUser } from 'firebase/auth'
import { Alert } from 'react-native'

type AuthErrorsTypes = Partial<
  Record<(typeof AuthErrorCodes)[keyof typeof AuthErrorCodes], string>
>

const authErrors = {
  'auth/too-many-requests':
    'You made too many requests, please try again later.',
  'auth/email-already-in-use': 'Email already in use.',
} satisfies AuthErrorsTypes

export type SignUpProps = {
  email: string
  password: string
}
const useAuth = () => {
  const [user, setUser] = useState<FirebaseUser | null>()

  useEffect(() => {
    const unsubscribeOnAuthStateChanged = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser)
      }
    )
    return unsubscribeOnAuthStateChanged
  }, [])

  const handleSignIn = useCallback(async ({ email, password }: SignUpProps) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error: any) {
      if (error.code in authErrors) {
        // @ts-ignore
        Alert.alert('Error', authErrors[error.code])
      } else {
        Alert.alert('Error', 'Incorrect email or password.')
      }
    }
  }, [])

  const handleSignUp = useCallback(async ({ email, password }: SignUpProps) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (error: any) {
      // @ts-ignore
      Alert.alert('Error', authErrors[error.code])
    }
  }, [])

  const handleLogout = useCallback(async () => {
    try {
      await auth.signOut()
      setUser(null)
    } catch (error) {
      console.error(error)
    }
  }, [])

  return {
    user,
    handleSignIn,
    handleSignUp,
    handleLogout,
  }
}

export default useAuth
