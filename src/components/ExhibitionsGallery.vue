<template>
	<section ref="draggableSection" class="exhibitions-gallery">
		<h1 class="exhibitions-gallery__title">
			Музей камня
			<span
				class="exhibitions-gallery__loading"
				:class="{ loading: isLoading }"
			>
				<my-loader />
			</span>
		</h1>
		<div
			ref="draggableContainer"
			class="exhibitions-gallery__list"
			:class="{ loading: isLoading }"
		>
			<exhibitions-gallery-block
				v-for="(block, index) in multipliedItems"
				:key="block.id"
				@click="centerItem(index)"
				:block="block"
			/>
		</div>
		<div class="exhibitions-gallery__button" :class="{ loading: isLoading }">
			<router-link
				v-if="exhibitions[0]"
				:to="`/exhibitions/categories/${exhibitions[0].id}`"
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
import { mapActions, mapState } from 'vuex'
import ExhibitionsGalleryBlock from '../components/ExhibitionsGalleryBlock.vue'
import MyLoader from '../components/UI/MyLoader.vue'

export default {
	components: {
		MyLoader,
		ExhibitionsGalleryBlock,
	},
	data() {
		return {
			timesToRepeat: 16,
			draggableInstance: null,
			itemActiveElement: null,
		}
	},

	methods: {
		...mapActions({
			fetchExhibitions: 'exhibitions/fetchExhibitions',
		}),
		createDraggable() {
			this.draggableInstance = Draggable.create('.exhibitions-gallery__list', {
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

				item.classList.add('exhibitions-gallery__item-active')
				section.classList.add('exhibitions-gallery-active')

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
			} else if (
				this.$refs.draggableContainer !== null &&
				this.$refs.draggableContainer !== undefined
			) {
				const section = this.$refs.draggableSection
				const container = this.$refs.draggableContainer
				const item = container.children[index]
				item.classList.remove('exhibitions-gallery__item-active')
				section.classList.remove('exhibitions-gallery-active')
				this.draggableInstance.enabled(true)
				this.itemActiveElement = null
			}
		},
	},

	mounted() {
		this.fetchExhibitions()

		this.$nextTick(() => {
			gsap.registerPlugin(Draggable)
			this.createDraggable()
		})
	},

	beforeDestroy() {
		this.destroyDraggable()
	},

	computed: {
		...mapState({
			isLoading: state => state.exhibitions.isLoading,
			exhibitions: state => state.exhibitions.exhibitions,
		}),

		multipliedItems() {
			let result = []
			for (let i = 0; i < this.timesToRepeat; i++) {
				result = result.concat(this.exhibitions)
			}
			return result
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
		font-size: 120px;
		line-height: 1;
		font-weight: bold;
		position: absolute;
		text-align: center;
		font-family: var(--font-accent);
	}

	&__loading {
		opacity: 0;
		transition: opacity 1s;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 20px;

		&.loading {
			opacity: 1;
		}
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

		&.loading {
			opacity: 0;
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
		opacity: 1;
		transition: opacity 1s;

		&.loading {
			opacity: 0;
		}

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
