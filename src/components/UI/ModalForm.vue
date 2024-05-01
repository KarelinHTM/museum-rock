<template>
	<div v-if="visible" class="modal">
		<div class="modal__content">
			<span class="modal__close" @click="$emit('close')">&times;</span>
			<h2 class="modal__title">Запишись на одну из программ!</h2>
			<form class="modal__form" @submit.prevent="submitForm">
				<input
					class="modal__input input-reset"
					type="text"
					v-model="formData.name"
					placeholder="Имя"
					required
				/>
				<input
					class="modal__input input-reset"
					type="email"
					v-model="formData.lastname"
					placeholder="Фамилия"
					required
				/>
				<button class="modal__submit btn-reset" type="submit">
					Записаться
				</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		visible: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			formData: {
				name: '',
				lastname: '',
				message: '',
			},
		}
	},

	methods: {
		submitForm() {},
	},

	setup() {
		return {}
	},
}
</script>

<style lang="scss" scoped>
.modal {
	display: block;
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.4);

	&__content {
		background-color: var(--white-color);
		margin: 15% auto;
		padding: 50px;
		width: fit-content;
		position: relative;
	}

	&__close {
		color: var(--black-color);
		opacity: 0.4;
		float: right;
		width: 40px;
		font-size: 40px;
		font-weight: bold;
		position: absolute;
		top: 0px;
		right: 0px;
		text-align: center;
		line-height: 1;

		&:hover,
		&:focus {
			opacity: 1;
			text-decoration: none;
			cursor: pointer;
		}
	}

	&__title {
		margin-bottom: 20px;
	}

	&__form {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	&__input {
		border: 1px solid var(--dark-color);
		padding: 10px 20px;
	}

	&__submit {
		border: 1px solid var(--dark-color);
		padding: 10px 20px;
	}
}
</style>
