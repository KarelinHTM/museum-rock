<template>
	<div class="program-item">
		<img
			class="program-item__image"
			:src="program.img"
			alt="Обложка программы"
		/>
		<div class="program-item__text">
			<div class="program-item__name">{{ program.name }}</div>
			<div class="program-item__date">{{ program.date }}</div>
		</div>
		<button class="program-item__button btn-reset">Посмотреть описание</button>
		<button class="program-item__button btn-reset" @click="$emit('open')">
			Записаться на программу
		</button>
	</div>
</template>

<script>
export default {
	props: {
		program: Object,
	},

	data() {
		return {}
	},

	methods: {},
}
</script>

<style lang="scss" scoped>
.program-item {
	padding: 30px;
	padding-bottom: 50px;

	&:hover {
		background-color: var(--accentPurple-color);
		color: var(--white-color);

		& .program-item__description {
			text-decoration: underline;
		}
	}

	&__image {
	}
	&__text {
	}
	&__name {
	}
	&__date {
		text-decoration: none;
	}
	&__button {
		width: 100%;
		border: 1px solid currentColor;
		line-height: 1.5;
		color: inherit;
	}
}
</style>
