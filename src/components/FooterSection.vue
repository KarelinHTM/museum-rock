<template>
	<footer class="footer">
		<div class="container">
			<div class="footer__inner">
				<h3 class="footer__title">Музей камня</h3>
				<div class="footer__row">
					<div class="footer__contacts">
						<address class="footer__address">
							<img
								class="footer__contacts-icon"
								src="/img/svg/contacs-address.svg"
								alt="Местоположение"
							/>
							Красноярск, ул. Ады Лебедевой, 93В
						</address>
						<a href="tel:+79511234567" class="footer__number">
							<img
								class="footer__contacts-icon"
								src="/img/svg/contacs-tel.svg"
								alt="Местоположение"
							/>
							<span class="footer__contacts-link"> +7 (951) 123-45-67 </span></a
						>
						<a href="mailto:test@test.ru" class="footer__email">
							<img
								class="footer__contacts-icon"
								src="/img/svg/contacs-mail.svg"
								alt="Местоположение"
							/>
							<span class="footer__contacts-link"> test@test.ru </span></a
						>
					</div>
					<div class="footer__social">
						<ul class="footer__social-list list-reset">
							<li class="footer__social-item">
								<a href="" class="footer__social-link">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="9.3"
										height="7.9"
										viewBox="0 0 9.3 7.9"
										xml:space="preserve"
									>
										<path
											d="M3.5 7.4c0-.4 0-.6.1-1.1v-.9c0-.1.1-.3.2-.4l3.9-3.5c0-.1-3 1.6-4.2 2.4-.3.2-.6.4-1 .6-.1 0-.1.1-.2 0C1.7 4.4 1 4.2.4 4c-.2-.1-.4-.1-.4-.3s.1-.3.3-.4L8.5.1c.3-.1.6 0 .7.1.2.1.2.3.1.6C9 2.1 7.9 7.4 7.8 7.5c-.1.4-.4.5-.7.3-.7-.5-1.3-1-2-1.5-.1-.1-.2-.1-.3 0-.3.3-.6.7-1 1-.1.1-.2.1-.3.1z"
											fill="#fff"
										></path>
									</svg>
								</a>
							</li>
							<li class="footer__social-item">
								<a href="" class="footer__social-link">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="13"
										height="8"
										viewBox="0 0 32 20"
										xml:space="preserve"
									>
										<path
											d="M17.4 20C6.5 20 .3 12.5 0 0h5.5c.2 9.2 4.2 13 7.4 13.8V0h5.2v7.9c3.1-.3 6.4-3.9 7.6-7.9h5.2c-.9 4.9-4.5 8.5-7 10 2.6 1.2 6.7 4.3 8.2 10h-5.7c-1.2-3.8-4.3-6.7-8.3-7.1V20h-.7z"
											fill="#fff"
										></path>
									</svg>
								</a>
							</li>
							<li class="footer__social-item">
								<a href="" class="footer__social-link"></a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
	background-color: var(--dark-color);
	color: var(--white-color);
	font-size: 18px;

	&__inner {
		padding: 40px 0;
	}

	&__title {
		width: 100%;
		border-bottom: 1px solid var(--white-color);
		font-size: 25px;
		padding-bottom: 5px;
		margin-bottom: 10px;
	}
	&__row {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		gap: 20px;
	}
	&__contacts {
		display: flex;
		flex-direction: column;
		gap: 10px;

		&-icon {
			width: 30px;
			height: 30px;
			object-fit: contain;
		}

		&-link {
			position: relative;
			width: fit-content;
			padding-bottom: 2px;

			&::after {
				content: '';
				background-color: var(--accentGreen-color);
				height: 1px;
				width: 0;
				bottom: 0;
				left: 0;
				position: absolute;
				transition: width 0.2s ease-in-out;
			}
		}
	}

	&__address {
		font-style: normal;
		display: flex;
		align-items: center;
		gap: 20px;
	}

	&__number {
		display: flex;
		align-items: center;
		gap: 20px;
		&:hover {
			.footer__contacts-link::after {
				width: 100%;
			}
		}
	}

	&__email {
		display: flex;
		align-items: center;
		gap: 20px;
		&:hover {
			.footer__contacts-link::after {
				width: 100%;
			}
		}
	}

	&__social {
	}

	&__social-list {
		display: flex;
		gap: 20px;
		align-items: center;
	}

	&__social-item {
	}

	&__social-link {
		svg {
			width: 35px;
			height: 30px;

			path {
				width: 100px;
				transition: fill 0.2s ease-in-out;
			}

			&:hover path {
				fill: var(--accentPink-color);
			}
		}
	}
}
</style>
