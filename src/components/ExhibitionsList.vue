<template>
	<my-loader class="exhibitions-list__loader" v-if="!allImagesLoaded" />
	<div class="exhibitions-list grid" :class="{ loading: allImagesLoaded }">
		<a
			class="exhibitions-list__item"
			v-for="(item, index) in this.currentItem.items"
			:key="item.id"
			v-if="this.currentItem"
		>
			<div class="exhibitions-list__block">
				<img
					:src="item.image"
					alt="Фото пока нет"
					class="exhibitions-list__image"
					@load="imageLoaded()"
				/>
			</div>
			<h3 class="exhibitions-list__title">{{ item.title }}</h3>
		</a>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import MyLoader from './UI/MyLoader.vue'

export default {
	components: {
		MyLoader,
	},
	data() {
		return {
			loadCount: 0,
			allImagesLoaded: false,
		}
	},

	methods: {
		...mapActions({
			fetchExhibitions: 'exhibitions/fetchExhibitions',
		}),

		imageLoaded() {
			console.log(this.loadCount)
			this.loadCount++
			if (this.loadCount === this.currentItem.items.length) {
				this.allImagesLoaded = true
			}
		},
	},

	watch: {
		currentItem() {
			this.loadCount = 0
			this.allImagesLoaded = false
		},
	},

	computed: {
		...mapState({
			exhibitions: state => state.exhibitions.exhibitions,
		}),

		currentItem() {
			const id = parseInt(this.$route.params.id, 10)
			return this.exhibitions.find(exhibition => exhibition.id === id)
		},
	},
}
</script>

<style lang="scss" scoped>
.exhibitions-list {
	margin: var(--offset) 0;
	display: none;

	&.loading {
		display: grid;
	}

	&__loader {
		margin: var(--offset) auto;
	}
	&__item {
		grid-column: 3 span;
	}
	&__block {
		width: 100%;
		background-color: var(--black-color);
		color: var(--white-color);
		border: 1px solid var(--black-color);
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	&__image {
		width: 100%;
	}
	&__title {
		word-wrap: break-word;
		font-size: 20px;
		font-weight: 700;
	}
}
</style>
