<template>
	<section class="exhibitions-gallery">
		<h1 class="exhibitions-gallery__title">Музей камня</h1>
		<div ref="draggableContainer" class="exhibitions-gallery__list">
			<div
				v-for="(block, index) in multipliedItems"
				:key="index"
				class="exhibitions-gallery__item"
				@click="centerItem(index)"
			>
				<img :src="`../src/assets/${block.img}`" alt="Категория экспонатов" />
			</div>
		</div>
		<a href="" class="exhibitions-gallery__button">
			<span>Все экспонаты</span>
		</a>
	</section>
</template>

<script>
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'

export default {
	data() {
		return {
			containerDraggableClass: '.exhibitions-gallery__list',
			draggableInstance: null,
			timesToRepeat: 4,
			blocks: [
				{
					img: '1.jpg',
				},
				{
					img: '2.jpg',
				},
				{
					img: '3.jpg',
				},
				{
					img: '4.jpg',
				},
				{
					img: '5.jpg',
				},
				{
					img: '6.jpg',
				},
				{
					img: '7.jpg',
				},
				{
					img: '8.jpg',
				},
				{
					img: '9.jpg',
				},
				{
					img: '10.jpg',
				},
				{
					img: '11.jpg',
				},
				{
					img: '12.jpg',
				},
				{
					img: '13.jpg',
				},
				{
					img: '14.jpg',
				},
				{
					img: '15.jpg',
				},
				{
					img: '16.jpg',
				},
				{
					img: '17.jpg',
				},
				{
					img: '18.jpg',
				},
				{
					img: '19.jpg',
				},
				{
					img: '20.jpg',
				},
			],
		}
	},

	mounted() {
		this.$nextTick(() => {
			gsap.registerPlugin(Draggable)
			this.createDraggable()
		})
	},

	beforeDestroy() {
		this.destroyDraggable()
	},

	computed: {
		multipliedItems() {
			let result = []
			for (let i = 0; i < this.timesToRepeat; i++) {
				result = result.concat(this.blocks)
			}
			return result
		},
	},

	methods: {
		createDraggable() {
			this.draggableInstance = Draggable.create(this.containerDraggableClass, {
				bounds: document.querySelector('.exhibitions-gallery'),
				inertia: true,
			})
		},
		destroyDraggable() {
			if (this.draggableInstance) {
				this.draggableInstance.destroy()
			}
		},
		centerItem(index) {
			const container = this.$refs.draggableContainer
			const item = container.children[index]
			const containerWidth = container.offsetWidth * 8.2
			const containerHeight = container.offsetHeight * 8.2
			const itemWidth = item.offsetWidth
			const itemHeight = item.offsetHeight
			const offsetX = (containerWidth - itemWidth) / 2
			const offsetY = (containerHeight - itemHeight) / 2
			gsap.to(container, { x: offsetX, y: offsetY, duration: 0.3 })
		},
	},
}
</script>

<style lang="scss" scoped>
.exhibitions-gallery {
	overflow: hidden;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;

	&__title {
		text-transform: uppercase;
		font-size: 100px;
		font-weight: bold;
		position: absolute;
		text-align: center;
		font-family: var(--font-family);
	}

	&__list {
		width: 30vw;
		column-width: 32px;
		gap: 8px;
		transform: scale(8.2);
		will-change: transform;
		transition: transform 1s cubic-bezier(0.075, 1, 0.25, 1), opacity 1s;
	}

	&__item {
		margin-bottom: 8px;
		transform: scale(1.001);
		will-change: transform;
		transition: 0.3s;
		cursor: pointer;

		&:hover {
			transform: scale(1.03);
			box-shadow: 0 0 2px 1px var(--accentPurple-color);
		}

		& img {
			width: 100%;
			display: block;
		}
	}

	&__button {
		position: absolute;
		z-index: 3000;
		left: 10vw;
		background-color: var(--white-color);
		bottom: 10vh;
		font-size: 19px;
		font-weight: 700;
		line-height: 1;
		padding: 6px 10px 8px;
		box-shadow: 0 0 10px 0 var(--dark-color);
		transition: all 0.4s ease-in-out;

		span {
			position: relative;
			z-index: 3000;
		}

		&:hover {
			color: var(--white-color);

			&::after {
				bottom: 0;
				height: 100%;
			}
		}

		&::after {
			animation: linearGradientAccent 20s linear infinite;
			background: linear-gradient(
				270deg,
				var(--accentPink-color),
				var(--accentPurple-color) 50%,
				var(--accentPink-color)
			);
			background-size: 400% 400%;
			content: '';
			left: 0;
			right: 0;
			bottom: -5px;
			height: 5px;
			position: absolute;
			transition: all 0.4s ease-in-out;
			z-index: 0;
		}
	}
}

// /* MOBILE */

// @media (max-width: 992px) {
// 	.header {
// 		position: relative;
// 	}

// 	body {
// 		overflow: scroll;
// 		display: block;
// 		padding: 0.5em;
// 	}

// 	.gallery {
// 		width: 100%;
// 		column-width: 10em;
// 		transform: scale(1);
// 	}
// 	.exhibitions-gallery__item:hover {
// 		transform: scale(1);
// 	}
// }
</style>
