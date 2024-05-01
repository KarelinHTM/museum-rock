<template>
	<div class="timeline-item grid">
		<div class="timeline-item__cap" v-if="index % 2"></div>
		<div class="timeline-item__block">
			<div class="timeline-item__year">{{ year.year }}</div>
			<h3 class="timeline-item__title">{{ year.title }}</h3>
			<p class="timeline-item__description">{{ year.description }}</p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	props: {
		year: Object,
		index: Number,
	},
	methods: {},
}
</script>

<style lang="scss" scoped>
.timeline-item {
	padding-bottom: 40px;

	&__block {
		grid-column: 6 span;
		position: relative;

		&::before {
			content: '';
			position: absolute;
			background-color: #000;
			border: 6px solid #4f4c93;
			border-radius: 100%;
			display: block;
			height: 40px;
			width: 40px;
			top: 39px;
			right: -60px;
			z-index: 15;
		}
	}

	&:nth-of-type(odd) &__block {
		&::before {
			right: -60px;
			left: none;
		}
	}

	&:nth-of-type(even) &__block {
		&::before {
			right: none;
			left: -60px;
		}
	}

	&:nth-of-type(3n + 1) &__block {
		&::before {
			border-color: var(--accentPink-color);
		}
	}
	&:nth-of-type(3n + 2) &__block {
		&::before {
			border-color: var(--accentPurple-color);
		}
	}
	&:nth-of-type(3n + 3) &__block {
		&::before {
			border-color: var(--accentGreen-color);
		}
	}

	&__cap {
		grid-column: 6 span;
	}

	&__year {
		text-align: center;
		font-weight: bold;
		font-family: var(--font-accent);
		font-size: 48px;
		border-bottom: 3px solid var(--dark-color);
		line-height: 1;
		padding-bottom: 10px;
		margin-bottom: 15px;
	}

	&:nth-of-type(3n + 1) &__year {
		color: var(--accentPink-color);
	}
	&:nth-of-type(3n + 2) &__year {
		color: var(--accentPurple-color);
	}
	&:nth-of-type(3n + 3) &__year {
		color: var(--accentGreen-color);
	}

	&__title {
		background-color: var(--dark-color);
		color: var(--white-color);
		font-family: var(--font-accent);

		width: fit-content;
		padding: 0 5px;
		font-size: 30px;
		margin-bottom: 10px;
	}

	&:nth-of-type(3n + 1) &__title {
		background-color: var(--accentPink-color);
	}
	&:nth-of-type(3n + 2) &__title {
		background-color: var(--accentPurple-color);
	}
	&:nth-of-type(3n + 3) &__title {
		background-color: var(--accentGreen-color);
	}

	&__description {
	}
}
</style>
