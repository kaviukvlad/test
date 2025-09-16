import styled from 'styled-components'

const Section = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;
	margin: 200px 92px 400px 162px;

	@media (max-width: 1024px) {
		flex-direction: column;
		text-align: center;
		margin: 100px 40px 200px 40px;
	}

	@media (max-width: 768px) {
		margin: 60px 20px 100px 20px;
	}
`

const Text = styled.div`
	p {
		color: #fff;
		font-family: Montserrat;
		font-size: 22px;
		font-weight: 400;
		line-height: normal;

		@media (max-width: 768px) {
			font-size: 18px;
		}
	}
`

const ButtonsWrapper = styled.div`
	display: flex;
	gap: 1.5rem;

	@media (max-width: 768px) {
		flex-direction: column;
		width: 100%;
		align-items: center;
	}
`

const ButtonBase = styled.button`
	cursor: pointer;
	display: flex;
	width: 318px;
	height: 63px;
	padding: 10px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	flex-shrink: 0;
	border-radius: 10px;
	border: 2px solid var(--light, #f4c999);
	background: #b98b56;
	box-shadow:
		-17px 13px 35px 0 rgba(244, 201, 153, 0.5) inset,
		0 0 34.6px 4px rgba(244, 201, 153, 0.7);

	@media (max-width: 480px) {
		width: 100%;
		font-size: 18px;
	}
`

const SecondaryButton = styled(ButtonBase)`
	background: transparent;
	display: flex;
	width: 248px;
	height: 63px;
	padding: 10px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	flex-shrink: 0;
	border-radius: 10px;
	border: 2px solid #fff;
	color: #fff;
	font-family: Montserrat;
	font-size: 22px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;

	@media (max-width: 480px) {
		width: 100%;
	}
`

const PrimaryButton = styled(ButtonBase)`
	color: #fff;
	font-family: Montserrat;
	font-size: 22px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
`

export const HeroButtons = () => {
	return (
		<Section>
			<Text>
				<p>
					We create bespoke interiors that <br /> reflect your unique style and
					elevate <br /> your lifestyle.
				</p>
			</Text>
			<ButtonsWrapper>
				<PrimaryButton>Schedule Consultation</PrimaryButton>
				<SecondaryButton>View Our Work</SecondaryButton>
			</ButtonsWrapper>
		</Section>
	)
}
