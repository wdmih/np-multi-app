import { useCallback, useEffect, useState } from 'react'
import { firebaseAuth, firebaseDB } from '../firebase'
import { useMessage } from './message.hook'

export const useUserDataDB = () => {
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState(null)
  const [inProgress, setInProgress] = useState(false)
  const [currentApiKey, setCurrentApiKey] = useState(null)

  const message = useMessage()
  const userId = firebaseAuth.currentUser.uid

  const userDataSet = useCallback(
    async (npProfileName, npProfileApiKey) => {
      if (npProfileName && npProfileApiKey) {
        setInProgress(true)
        const userDataKey = await firebaseDB
          .ref()
          .child(`users/${userId}/np-profiles`)
          .push().key
        const userData = { npProfileName, npProfileApiKey, userDataKey }
        const updates = {}
        updates[`users/${userId}/np-profiles/${userDataKey}`] = userData
        await firebaseDB
          .ref()
          .update(updates)
          .then((error) => {
            if (error) {
              setError(error)
              message('There was some problem...')
            }
            message('Data successfuly added')
          })
        setInProgress(false)
      } else {
        message('Fields must not be empty')
      }
    },
    [message, userId]
  )

  const userDataDelete = useCallback(
    async (id) => {
      await firebaseDB
        .ref(`users/${userId}/np-profiles/${id}`)
        .remove()
        .then((error) => {
          if (error) {
            setError(error)
            message('There was some problem...')
          }
          message('Data successfuly removed')
        })
    },
    [message, userId]
  )

  // const useApiKey = useCallback(apiKey => {
  //   setCurrentApiKey(apiKey)
  // })

  useEffect(() => {
    firebaseDB.ref(`/users/${userId}/np-profiles`).on('value', (snapshot) => {
      setUserData(snapshot.val())
    })
  }, [setUserData, userId, userDataDelete])

  return { userData, userDataSet, userDataDelete, error, inProgress, currentApiKey, setCurrentApiKey }
}
