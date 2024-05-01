import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage, ref } from 'firebase/storage'

// Ваши конфигурационные данные Firebase
const firebaseConfig = {
	apiKey: 'AIzaSyDGVRmA--pBDYTOjw1YbGuaxsgZmgn-U2A',
	authDomain: 'museum-rock.firebaseapp.com',
	projectId: 'museum-rock',
	storageBucket: 'museum-rock.appspot.com',
	messagingSenderId: '739406576155',
	appId: '1:739406576155:web:c2c1ad49e8149dce4956be',
	measurementId: 'G-MZQWMX2D5K',
}

// Инициализируйте Firebase
const app = initializeApp(firebaseConfig)

// Получите экземпляр Firestore
const db = getFirestore(app)
const storage = getStorage()

export { db }
