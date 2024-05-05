import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Ваши конфигурационные данные Firebase
export const firebaseApp = initializeApp({
	apiKey: 'AIzaSyDGVRmA--pBDYTOjw1YbGuaxsgZmgn-U2A',
	authDomain: 'museum-rock.firebaseapp.com',
	projectId: 'museum-rock',
	storageBucket: 'museum-rock.appspot.com',
	messagingSenderId: '739406576155',
	appId: '1:739406576155:web:c2c1ad49e8149dce4956be',
	measurementId: 'G-MZQWMX2D5K',
})

const db = getFirestore(firebaseApp)
const storage = getStorage()

export { db }
