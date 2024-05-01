import { createRouter, createWebHistory } from 'vue-router'
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
	history: createWebHistory(),
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
