<template>
	<section ref="draggableSection" class="exhibitions-gallery">
		<h1 class="exhibitions-gallery__title">Музей камня</h1>
		<div ref="draggableContainer" class="exhibitions-gallery__list">
			<div
				v-for="(block, index) in multipliedItems"
				:key="index"
				class="exhibitions-gallery__item"
				@click="centerItem(index)"
			>
				<img :src="`./img/${block.img}`" alt="Категория экспонатов" />
				<div class="exhibitions-gallery__item-mask">
					<img
						src="/img/svg/exhibitions-close.svg"
						alt="Крест"
						class="exhibitions-gallery__item-close"
					/>
					<div class="exhibitions-gallery__item-text">
						<h3 class="exhibitions-gallery__item-title">Керамика</h3>
						<p class="exhibitions-gallery__item-description">
							Художественная и интерьерная керамика от талантливых красноярских
							керамистов для дома и в подарок.
						</p>
						<router-link
							to="/exhibitions/catalog"
							class="exhibitions-gallery__item-button"
						>
							<span>Подробнее</span>
						</router-link>
					</div>
				</div>
			</div>
		</div>
		<div class="exhibitions-gallery__button">
			<router-link
				to="/exhibitions/catalog"
				class="exhibitions-gallery__button-item"
			>
				<span>Все экспонаты</span>
			</router-link>
		</div>
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
			itemActiveElement: '',
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
			})[0]
		},
		destroyDraggable() {
			if (this.draggableInstance) {
				this.draggableInstance.destroy()
			}
		},
		centerItem(index) {
			if (!this.itemActiveElement) {
				const section = this.$refs.draggableSection
				const container = this.$refs.draggableContainer
				const item = container.children[index]
				this.itemActiveElement = item
				const itemRect = item.getBoundingClientRect()
				const halfWindowWidth = window.innerWidth / 2
				const halfWindowHeight = window.innerHeight / 2

				item.classList.toggle('exhibitions-gallery__item-active')
				section.classList.toggle('exhibitions-gallery-active')

				const offsetX =
					this.draggableInstance.x -
					(itemRect.left - halfWindowWidth) -
					itemRect.width / 2
				const offsetY =
					this.draggableInstance.y -
					(itemRect.top - halfWindowHeight) -
					itemRect.height / 2

				requestAnimationFrame(() => {
					gsap.to(container, {
						x: offsetX,
						y: offsetY,
						duration: 0.5,
					})
				})

				this.draggableInstance.enabled(false)
			} else {
				const section = this.$refs.draggableSection
				const container = this.$refs.draggableContainer
				const item = container.children[index]
				item.classList.toggle('exhibitions-gallery__item-active')
				section.classList.toggle('exhibitions-gallery-active')
				this.draggableInstance.enabled(true)
				this.itemActiveElement = ''
			}
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
		column-width: 34px;
		gap: 7px;
		transform: scale(8);
		will-change: transform;
		transition: transform 1s cubic-bezier(0.075, 1, 0.25, 1), opacity 1s;
		position: relative;
		z-index: 1100 !important;
	}

	&__item {
		margin-bottom: 8px;
		transform: scale(1.001);
		will-change: transform;
		transition: 0.3s;
		cursor: pointer;
		position: relative;
		z-index: 1000;

		&:hover {
			transform: scale(1.03);
			box-shadow: 0 0 2px 1px var(--accentPurple-color);
		}

		img {
			width: 100%;
			display: block;
			pointer-events: none;
		}

		&-mask {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			display: none;
			background-color: rgba(0, 0, 0, 0.6);

			.exhibitions-gallery__item-close {
				pointer-events: all;
				position: absolute;
				right: 1px;
				top: 1px;
				width: 3px;
				transition: all 0.2s ease-in;
				opacity: 0;

				&:hover {
					transform: scale(1.3);
				}

				animation-delay: 0.8s;
				animation-duration: 0.3s;
				animation-fill-mode: forwards;
				animation-iteration-count: 1;
				animation-name: cardOpacity;
				animation-timing-function: ease;
			}

			.exhibitions-gallery__item-text {
				color: var(--white-color);
				pointer-events: all;
				font-size: 2px;
				position: absolute;
				left: 0;
				bottom: 0;
				max-width: 32px;
				padding: 2px 1px;
				opacity: 0;

				animation-delay: 0.8s;
				animation-duration: 0.3s;
				animation-fill-mode: forwards;
				animation-iteration-count: 1;
				animation-name: cardOpacity;
				animation-timing-function: ease;

				.exhibitions-gallery__item-title {
					font-size: 2em;
					margin-bottom: 1px;
					text-transform: uppercase;
					line-height: 1;
				}

				.exhibitions-gallery__item-description {
					margin-bottom: 2px;
				}

				.exhibitions-gallery__item-button {
					font-weight: 700;
					animation: linearGradientAccent 20s linear infinite;
					line-height: 1;
					width: fit-content;
					padding: 0.5px 0.5px;
					background: linear-gradient(
						270deg,
						var(--accentPink-color),
						var(--accentPurple-color) 50%,
						var(--accentPink-color)
					);
					background-size: 400% 400%;
					margin: 2px 0 1px;
				}

				&:hover {
					.exhibitions-gallery__item-title {
					}
				}
			}
		}

		&-active {
			transform: scale(1.5);
			z-index: 1500;

			&:hover {
				transform: scale(1.5);
				box-shadow: none;
			}

			.exhibitions-gallery__item-mask {
				display: block;
			}
		}
	}

	&-active {
		pointer-events: none;
	}

	&__button {
		position: absolute;
		z-index: 1200;
		left: 10vw;
		background-color: var(--white-color);
		bottom: 10vh;
		font-size: 19px;
		line-height: 1;
		font-weight: 700;
		box-shadow: 0 0 10px 0 var(--dark-color);
		transition: all 0.4s ease-in-out;
		pointer-events: all;

		&-item {
			display: block;
		}

		span {
			position: relative;
			z-index: 1;
			padding: 6px 10px 8px;
			display: block;
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
