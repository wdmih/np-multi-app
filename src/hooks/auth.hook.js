import { useState, useCallback, useEffect } from "react"
import { firebaseAuth } from "../firebase"

export const useAuth = () => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const register = useCallback(async (credentials) => {
    try {
      const { user } = await firebaseAuth.createUserWithEmailAndPassword(
        credentials.email,
        credentials.password
      )
      setUser(user)
    } catch (error) {
      alert(error.message)
    }
  }, [])

  const login = useCallback(async (credentials) => {
    try {
      const { user } = await firebaseAuth.signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      )
      setUser(user)
    } catch (error) {
      console.log(error)
    }
  }, [])

  const logout = useCallback(async () => {
    try {
      firebaseAuth.signOut().then(() => setUser(null))
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
        setIsLoading(false)
      } else {
        setUser(null)
        setIsLoading(false)
      }
    })
  }, [login])

  return { register, login, logout, user, isLoading }
}
