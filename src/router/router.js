import { createRouter, createWebHistory } from 'vue-router'
import ExhibitionsCategories from '../components/ExhibitionsCategories.vue'
import ExhibitionsList from '../components/ExhibitionsList.vue'
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
		path: '/exhibitions/categories',
		component: ExhibitionsCategories,
		children: [
			{
				path: ':id',
				component: ExhibitionsList,
			},
		],
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
