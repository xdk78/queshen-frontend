import Firebase from '@firebase/app'
import '@firebase/firestore'
import config from './config'

const firebaseApp = Firebase.initializeApp(config)

const db = firebaseApp.firestore()
db.settings({timestampsInSnapshots: true})

export default db
