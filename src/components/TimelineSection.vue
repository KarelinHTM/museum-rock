<template>
	<section class="timeline">
		<div class="container">
			<div class="timeline__inner">
				<timeline-item
					v-for="(year, index) in years"
					:key="index"
					:year="year"
					:index="index"
				/>
				<div class="timeline__stick"></div>
			</div>
		</div>
	</section>
</template>

<script>
import TimelineItem from '../components/TimelineItem.vue'

export default {
	components: {
		TimelineItem,
	},
	data() {
		return {
			years: [
				{
					year: 1942,
					title: 'Начало истории',
					description:
						'История завода началась во время Великой Отечественной войны. Началось производство продукции для фронта: пленка была нужна для аэрофотосъемки в разведывательных целях и для составления карт местности.',
				},
				{
					year: 1952,
					title: 'Фотографическая бумага',
					description:
						'С 1952 года фабрика стала выпускать только фотографическую бумагу, полностью отойдя от военного производства.',
				},
				{
					year: 1976,
					title: 'Красноярский зав',
					description:
						'Фабрику переименовали в Красноярский завод светочувствительных материалов «Квант».',
				},
				{
					year: 1976,
					title: 'Красноярский зав',
					description:
						'Фабрику переименовали в Красноярский завод светочувствительных материалов «Квант».',
				},
				{
					year: 1976,
					title: 'Красноярский зав',
					description:
						'Фабрику переименовали в Красноярский завод светочувствительных материалов «Квант».',
				},
			],
		}
	},
}
</script>

<style lang="scss" scoped>
.timeline {
	&__inner {
		position: relative;
		padding-top: 20vh;
		min-height: 100vh;
		height: 100%;
	}

	&__stick {
		position: absolute;
		border-right: 3px solid var(--dark-color);
		height: 100%;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: 10;
	}
}
</style>
