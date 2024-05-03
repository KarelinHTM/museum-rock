<template>
	<div class="exhibitions-list grid">
		<a
			class="exhibitions-list__item"
			v-for="(item, index) in this.currentItem.items"
			:key="item.id"
		>
			<img
				:src="`../../img/${item.img}`"
				alt="Фото камня"
				class="exhibitions-list__image"
			/>
			<h3 class="exhibitions-list__title">{{ item.title }}</h3>
		</a>
	</div>
</template>

<script>
export default {
	data() {
		return {
			blocks: [
				{
					id: 1,
					img: '1.jpg',
					title: 'Керамика',
					description:
						'Художественная и интерьерная керамика от талантливых красноярских керамистов для дома и в подарок.',
				},
				{
					id: 2,
					img: '2.jpg',
					title: 'Керамика',
					description:
						'Художественная и интерьерная керамика от талантливых красноярских керамистов для дома и в подарок.',
				},
				{
					id: 3,
					img: '3.jpg',
					title: 'Керамика',
					description:
						'Художественная и интерьерная керамика от талантливых красноярских керамистов для дома и в подарок.',
				},
				{
					id: 4,
					img: '4.jpg',
					title: 'Керамика',
					description:
						'Художественная и интерьерная керамика от талантливых красноярских керамистов для дома и в подарок.',
				},
				{
					id: 5,
					img: '5.jpg',
					title: 'Керамика',
					description:
						'Художественная и интерьерная керамика от талантливых красноярских керамистов для дома и в подарок.',
					items: [
						{
							id: 1,
							title: 'Берлога',
							img: '5.1.jpg',
						},
						{
							id: 2,
							title: 'Берлога',
							img: '5.2.jpg',
						},
						{
							id: 3,
							title: 'Берлога',
							img: '5.3.jpg',
						},
						{
							id: 4,
							title: 'Берлога',
							img: '5.4.jpg',
						},
						{
							id: 5,
							title: 'Берлога',
							img: '5.5.jpg',
						},
					],
				},
			],
		}
	},
	computed: {
		currentItem() {
			const id = parseInt(this.$route.params.id, 10)
			return this.blocks.find(block => block.id === id)
		},
	},
}
</script>

<style lang="scss" scoped>
.exhibitions-list {
	margin: var(--offset) 0;
	&__item {
		grid-column: 3 span;
	}
	&__image {
		width: 100%;
		border: 1px solid var(--black-color);
	}
	&__title {
		word-wrap: break-word;
		font-size: 20px;
		font-weight: 700;
	}
}
</style>
