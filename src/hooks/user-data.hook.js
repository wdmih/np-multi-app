import { firebaseDB, firebaseAuth } from "../firebase"
import { useCallback, useState, useEffect } from "react"
import { useMessage } from "./message.hook"

export const useUserDataDB = () => {
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState(null)
  const [inProgress, setInProgress] = useState(false)
  const message = useMessage()

  const userDataSet = useCallback(
    async (userUid, npProfileName, npProfileApiKey) => {
      try {
        setInProgress(true)
        const userDataKey = await firebaseDB
          .ref()
          .child(`users/${userUid}/np-profiles`)
          .push().key
        const userData = { npProfileName, npProfileApiKey, userDataKey }
        let updates = {}
        updates[`users/${userUid}/np-profiles/${userDataKey}`] = userData
        await firebaseDB
          .ref()
          .update(updates)
          .then((error) => {
            if (error) {
              setError(error)
              message("There was some problem...")
            }
            message("Data successfuly added")
          })
        setInProgress(false)
      } catch (error) {
        message(error.message)
      }
    },
    [message]
  )

  useEffect(() => {
    const userId = firebaseAuth.currentUser.uid
    firebaseDB.ref(`/users/${userId}/np-profiles`).on("value", (snapshot) => {
      if (snapshot.val()) {
        setUserData(snapshot.val())
      }
    })
  }, [setUserData])

  return { userData, userDataSet, error, inProgress }
}