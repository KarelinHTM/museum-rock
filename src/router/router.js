import { createRouter, createWebHistory } from 'vue-router'
import ExhibitionsCatalog from '../components/ExhibitionsCatalog.vue'
import Afisha from '../pages/Afisha.vue'
import Exhibitions from '../pages/Exhibitions.vue'
import Home from '../pages/Home.vue'
import People from '../pages/People.vue'
import Timeline from '../pages/Timeline.vue'

const routes = [
	{
		path: '/',
		component: Home,
		name: 'Home',
	},
	{
		path: '/exhibitions',
		component: Exhibitions,
	},
	{
		path: '/exhibitions/catalog',
		component: ExhibitionsCatalog,
	},
	{
		path: '/people',
		component: People,
	},
	{
		path: '/timeline',
		component: Timeline,
	},
	{
		path: '/afisha',
		component: Afisha,
	},
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
})

router.beforeEach((to, from, next) => {
	if (to.matched.length === 0) {
		next({ name: 'Home' })
	} else {
		next()
	}
})

export default router
