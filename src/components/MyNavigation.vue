<template>
	<nav class="nav">
		<ul class="list-reset nav__list">
			<li class="nav__item">
				<router-link to="/exhibitions" class="nav__link"
					><span class="nav__link-text">Экспонаты</span></router-link
				>
			</li>
			<li class="nav__item">
				<router-link to="/people" class="nav__link">
					<span class="nav__link-text">Люди</span>
				</router-link>
			</li>
			<li class="nav__item">
				<router-link to="/timeline" class="nav__link">
					<span class="nav__link-text">Таймлайн</span>
				</router-link>
			</li>
			<li class="nav__item">
				<router-link to="/afisha" class="nav__link">
					<span class="nav__link-text">Афиша</span>
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	setup() {
		return {}
	},
}
</script>

<style lang="scss" scoped>
.nav {
	&__list {
		display: flex;
		gap: 20px;
	}
	&__item {
	}
	&__link {
		position: relative;
		&::before {
			content: '';

			position: absolute;
			transition: all 0.3s ease-in-out;

			left: -4px;
			top: 0px;
			width: 15px;
			height: 15px;
			background-color: var(--accentPink-color);
			z-index: 0;
		}

		&:hover {
			&::before {
				content: '';

				left: -8px;
				top: 0px;
				width: 3px;
				height: 100%;
			}
		}

		&-text {
			position: relative;
			z-index: 2;
			line-height: 1;
		}
	}
}

.router-link-active {
	&::before {
		content: '';

		left: -8px;
		top: 0px;
		width: 3px;
		height: 100%;
	}
}
</style>
