import { createStore } from 'vuex'
import { exhibitionsModule } from './exhibitionsModule'

export default createStore({
	modules: {
		exhibitions: exhibitionsModule,
	},
})
