<template>
	<section class="hero">
		<div class="hero__inner">
			<div class="hero__wrapper">
				<div class="hero__master">
					<div class="hero__section">
						<div style="width: 1100px; margin: 0px auto; position: relative">
							<div class="hero__info">
								<div>
									<svg
										width="80"
										height="64"
										viewBox="0 0 152 138"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M91.98 39.04H.53v98.31h31.62V66.57h28.21v70.78h31.62V66.57h28.22v70.78h31.64V66.47l-14.68-27.43H91.98ZM132.12 28.34 117.44.92H.95v27.53h131.17v-.1Z"
											fill="#4F4898"
										></path>
									</svg>
								</div>
								<p>
									<span
										>Креативное пространство, которое объединяет культурные
										события города, кофейню, галерею современного искусства и
										шоурум с&nbsp;изделиями красноярских производителей в одном
										месте.</span
									>
								</p>
							</div>
						</div>
					</div>
					<div
						class="hero__section"
						@click="toggleSection(1)"
						:class="{
							'hero__section-active': activeSection === 1,
							'hero__section-previous':
								activeSection !== 1 && activeSection !== 0,
						}"
					>
						<div style="width: 1100px; margin: 0px auto; position: relative">
							<div class="hero__info">
								<h3><span>Галерея</span></h3>
								<p>
									Выставочное пространство, где мы показываем современное
									искусство и другие кретивные направления. Экспозиции
									обновляются раз в&nbsp;месяц. Работы доступны к приобретению.
								</p>
								<a href="/gallery">Перейти</a>
							</div>
						</div>
					</div>
					<div
						class="hero__section"
						@click="toggleSection(2)"
						:class="{
							'hero__section-active': activeSection === 2,
							'hero__section-previous': activeSection == 3,
						}"
					>
						<div style="width: 1100px; margin: 0px auto; position: relative">
							<div class="hero__info">
								<h3><span>Онлайн шоурум</span></h3>
								<p>
									Здесь представлены товары, созданные мастерами Красноярского
									края. Знакомьтесь с&nbsp;брендами и приобретайте онлайн.
								</p>
								<a href="/showroom">Перейти</a>
							</div>
						</div>
					</div>
					<div
						class="hero__section"
						@click="toggleSection(3)"
						:class="{
							'hero__section-active': activeSection === 3,
						}"
					>
						<div style="width: 1100px; margin: 0px auto; position: relative">
							<div class="hero__info">
								<h3><span>Оффлайн шоурум</span></h3>
								<p>
									Пространство, где можно найти эксклюзивные вещи красноярских
									производителей, выбрать особенный подарок или порадовать себя
									сибирскими брендами высокого уровня.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			activeSection: 0,
		}
	},
	methods: {
		toggleSection(index) {
			if (index === this.activeSection) {
				this.activeSection = 0
			} else {
				this.activeSection = index
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.hero {
	&__wrapper {
		height: 100vh;
		width: 100%;
		overflow-x: hidden;
	}

	&__master {
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 100%;
		height: 100%;
		width: 100%;
	}

	&__section {
		background-position: 100%;
		background-repeat: no-repeat;
		background-size: cover;
		grid-area: 1 / 1 / 2 / 2;
		position: relative;
		filter: grayscale(1);
		transition: clip-path 0.3s ease, filter 0.3s ease;

		&-active {
			filter: grayscale(0) !important;

			& .hero__info {
				opacity: 1 !important;
				transform: translateY(38vh) !important;
			}

			&:after {
				opacity: 0 !important;
			}
		}

		&-previous {
			filter: grayscale(1) !important;

			&:after {
				opacity: 0 !important;
			}
		}

		&:first-of-type {
			z-index: 1;
			padding-left: 15px;
			filter: grayscale(0);
			position: relative;
			z-index: 1;
			background-color: var(--white-color);

			.hero__info {
				background-color: transparent;
				opacity: 1;
				padding-left: 0;
				transform: translateY(35vh);
				color: var(--dark-color);
			}

			&::after {
				opacity: 0;
			}
		}

		&:nth-of-type(2) {
			background-image: url('/img/hero1.jpg');
			clip-path: polygon(59% 0, 82% 0, 50% 100%, 27% 100%);
			z-index: 40;

			&:after {
				left: 0;
			}

			.hero__info {
				left: 10%;
				&:before {
					background-color: var(--accentGreen-color);
				}
			}

			&.hero__section-active {
				clip-path: polygon(0 0, 82% 0, 50% 100%, -23% 100%);
			}

			&.hero__section-previous {
				clip-path: polygon(0 0, 4% 0, 4% 100%, 0 100%);
			}
		}

		&:nth-of-type(3) {
			background-image: url('/img/hero2.jpg');
			clip-path: polygon(82% 0, 105% 0, 73% 100%, 50% 100%);
			z-index: 30;

			&:after {
				left: 20%;
			}

			.hero__info {
				left: 10%;
				&:before {
					background-color: var(--accentPurple-color);
				}

				a {
					&::after {
						background-color: var(--accentPurple-color);
					}
				}
			}

			&.hero__section-active {
				clip-path: polygon(0 0, 110% 0, 87% 100%, -23% 100%);
			}

			&.hero__section-previous {
				clip-path: polygon(0 0, 8% 0, 8% 100%, 0 100%);
			}
		}

		&:nth-of-type(4) {
			background-image: url('/img/hero3.jpg');
			clip-path: polygon(105% 0, 132% 0, 100% 100%, 73% 100%);
			z-index: 20;

			&:after {
				left: 44%;
			}

			.hero__info {
				left: 10%;
				&:before {
					background-color: var(--accentPink-color);
				}

				a {
					&::after {
						background-color: var(--accentPink-color);
					}
				}
			}

			&.hero__section-active {
				clip-path: polygon(0 0, 100% 0, 100% 100%, -27% 100%);
			}
		}

		&::after {
			background-image: url('/img/hero-shadow.png');
			background-position: 0 0;
			background-repeat: no-repeat;
			background-size: 100% 100%;
			content: '';
			height: 100%;
			left: 0%;
			opacity: 1;
			position: absolute;
			top: 0;
			transition: opacity 0.3s ease;
			width: 100%;
			will-change: opacity;
			z-index: 0;
		}

		&:hover {
			filter: grayscale(0);

			&::after {
				opacity: 0;
			}
		}
	}

	&__info {
		background-color: rgba(0, 0, 0, 0.75);
		color: #fff;
		display: flex;
		flex-direction: column;
		justify-content: center;
		opacity: 0;
		padding: 20px;
		position: absolute;
		top: 50%;
		transform: translateY(10vh);
		transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
		width: 300px;
		will-change: opacity, transform;
		z-index: 1;

		h3 {
			margin-bottom: 10px;
			font-size: 20px;
			line-height: 1;
		}

		p {
			margin-bottom: 10px;
		}

		a {
			position: relative;
			width: fit-content;
			font-weight: 300;
			&::after {
				content: '';
				background-color: var(--accentGreen-color);
				height: 2px;
				width: 0;
				bottom: 0;
				left: 0;
				position: absolute;
				transition: width 0.2s ease-in-out;
			}

			&:hover::after {
				width: 100%;
			}
		}

		&::before {
			content: '';
			height: 100%;
			left: -10px;
			position: absolute;
			top: 0;
			width: 10px;
			z-index: 500;
		}
	}
}
</style>
