<template>
	<div class="exhibitions-gallery__item">
		<img :src="`${block.image}`" alt="Категория экспонатов" />
		<div class="exhibitions-gallery__item-mask">
			<img
				src="/img/svg/exhibitions-close.svg"
				alt="Крест"
				class="exhibitions-gallery__item-close"
			/>
			<div class="exhibitions-gallery__item-text">
				<h3 class="exhibitions-gallery__item-title">{{ block.title }}</h3>
				<p class="exhibitions-gallery__item-description">
					{{ block.description }}
				</p>
				<router-link
					:to="`/exhibitions/categories/${block.id}`"
					class="exhibitions-gallery__item-button"
				>
					<span>Подробнее</span>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		block: Object,
	},
}
</script>

<style lang="scss" scoped>
.exhibitions-gallery__item {
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
				pointer-events: all;
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
</style>
