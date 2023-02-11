import { useCallback, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'
import { auth } from '../../firebase'
import type { User as FirebaseUser } from 'firebase/auth'

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
    await signInWithEmailAndPassword(auth, email, password)
  }, [])

  const handleSignUp = useCallback(async ({ email, password }: SignUpProps) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.error(error)
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
