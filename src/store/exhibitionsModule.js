import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'

export const exhibitionsModule = {
	state: () => ({
		exhibitions: [],
		isLoading: true,
	}),
	mutations: {
		setLoading(state, bool) {
			state.isLoading = bool
		},
		setExhibitions(state, exhibitions) {
			state.exhibitions = exhibitions
		},
	},
	actions: {
		fetchExhibitions({ commit }) {
			const exhibitionsRef = collection(db, 'exhibitions')

			onSnapshot(exhibitionsRef, snapshot => {
				const exhibitions = snapshot.docs.map(doc => {
					const docData = doc.data()
					let items = []
					if (docData.items) {
						items = docData.items.map((item, index) => ({
							...item,
							id: index + 1,
						}))
					}
					return {
						...docData,
						id: parseInt(doc.id),
						items: items,
					}
				})
				commit('setExhibitions', exhibitions)
				setTimeout(() => {
					commit('setLoading', false)
				}, 800)
			})
		},
	},

	namespaced: true,
}

// export const exhibitionsModule = {
// 	state: () => ({
// 		exhibitions: [],
// 		isLoading: true,
// 	}),
// 	mutations: {
// 		setLoading(state, bool) {
// 			state.isLoading = bool
// 		},
// 		setExhibitions(state, exhibitions) {
// 			state.exhibitions = exhibitions
// 		},
// 	},
// 	actions: {
// 		async fetchExhibitions({ commit }) {
// 			const exhibitionsRef = collection(db, 'exhibitions')

// 			const { data: exhibitionsData } = useCollection(exhibitionsRef)

// 			// Ожидание обновления данных
// 			await nextTick()

// 			if (exhibitionsData.value[0]) {
// 				console.log(exhibitionsData.value)

// 				const exhibitions = exhibitionsData.value.docs.map(doc => {
// 					const docData = doc.data()
// 					let items = []
// 					if (docData.items) {
// 						items = docData.items.map((item, index) => ({
// 							...item,
// 							id: index + 1,
// 						}))
// 					}
// 					return {
// 						...docData,
// 						id: parseInt(doc.id),
// 						items: items,
// 					}
// 				})
// 				commit('setExhibitions', exhibitions)
// 			}

// 			setTimeout(() => {
// 				commit('setLoading', false)
// 			}, 800)
// 		},

// 		setExhibitions({ commit }, exhibitions) {
// 			commit('setExhibitions', exhibitions)
// 			commit('setLoading', false)
// 		},
// 	},

// 	namespaced: true,
// }
