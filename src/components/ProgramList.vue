<template>
	<h2 class="afisha__title">Программы</h2>
	<Swiper class="afisha__swiper" :slides-per-view="3" :loop="true">
		<SwiperSlide
			class="afisha__slide"
			v-for="program in programs"
			:key="program.id"
		>
			<program-item @open="showModal = true" :program="program" />
		</SwiperSlide>
	</Swiper>

	<modal-form :visible="showModal" @close="showModal = false" />
</template>

<script>
import { collection, getDocs, query } from 'firebase/firestore'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'
import ProgramItem from '../components/ProgramItem.vue'
import ModalForm from '../components/UI/ModalForm.vue'
import { db } from '../firebase.js'

export default {
	components: {
		Swiper,
		SwiperSlide,
		ModalForm,
		ProgramItem,
	},

	data() {
		return {
			programs: [],
		}
	},

	setup() {
		const showModal = ref(false)

		return {
			showModal,
		}
	},

	created() {
		this.getPrograms()
	},

	methods: {
		async getPrograms() {
			const q = query(collection(db, 'programs'))
			const querySnap = await getDocs(q)

			querySnap.forEach(doc => {
				this.programs.push(doc.data())
			})
		},
	},
}
</script>

<style lang="scss" scoped>
.afisha {
	margin-top: 150px;
	&__title {
		text-align: center;
		text-decoration: underline;
		text-transform: uppercase;
		font-weight: bold;
		font-family: var(--font-accent);
		letter-spacing: 1px;
	}
	&__swiper {
		margin: 100px 0;
	}
	&__slide {
	}
}
</style>
