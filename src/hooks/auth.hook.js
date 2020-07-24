import { useState, useCallback, useEffect } from "react"
import { firebaseAuth } from "../firebase"
import { useMessage } from "./message.hook"

export const useAuth = () => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const message = useMessage()

  const register = useCallback(
    async (credentials) => {
      try {
        const { user } = await firebaseAuth.createUserWithEmailAndPassword(
          credentials.email,
          credentials.password
        )
        setUser(user)
      } catch (error) {
        message(error.message)
      }
    },
    [message]
  )

  const login = useCallback(
    async (credentials) => {
      try {
        const { user } = await firebaseAuth.signInWithEmailAndPassword(
          credentials.email,
          credentials.password
        )
        setUser(user)
      } catch (error) {
        message(error.message)
      }
    },
    [message]
  )

  const logout = useCallback(async () => {
    try {
      firebaseAuth.signOut().then(() => setUser(null))
    } catch (error) {
      message(error.message)
    }
  }, [message])

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
