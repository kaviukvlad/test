import styled from 'styled-components'

const Section = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;
`

const Text = styled.div`
	p {
		font-size: 1.375rem;
		color: #fff;
		font-family: 'Montserrat', sans-serif;
		margin: 0;
		padding: 200px 0 0 162px;
	}
`

const ButtonsWrapper = styled.div`
	display: flex;
	gap: 1.5rem;
	padding: 248px 92px 0 0;
`

const ButtonBase = styled.button`
	padding: 1.125rem 2rem;
	font-size: 1.375rem;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease;
	border-radius: 10px;
`

// Перша кнопка
const PrimaryButton = styled(ButtonBase)`
	background-color: #b98b56;
	color: #fff;
	border: 1px solid #b98b56;
	box-shadow: 0 0 20px #b98b56;

	&:hover {
		background: transparent;
		color: #fff;
	}
`

// Друга кнопка
const SecondaryButton = styled(ButtonBase)`
	background: transparent;
	color: #fff;
	border: 1px solid #ffffff;

	&:hover {
		background: #b98b56;
		box-shadow: 0 0 20px #b98b56;
		border: 1px solid #b98b56;
		color: #fff;
	}
`

export const HeroButtons = () => {
	return (
		<Section>
			<Text>
				<p>
					We create bespoke interiors that <br />
					reflect your unique style and elevate <br />
					your lifestyle.
				</p>
			</Text>
			<ButtonsWrapper>
				<PrimaryButton>Schedule Consultation</PrimaryButton>
				<SecondaryButton>View Our Work</SecondaryButton>
			</ButtonsWrapper>
		</Section>
	)
}
