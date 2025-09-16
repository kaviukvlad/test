import styled from 'styled-components'

import { Step } from './Step'
import { SectionTitle } from './Title'

export const CardStages = () => {
	return (
		<Section>
			<SectionTitle />
			<StepsGrid>
				<Step
					number='01'
					title='Research'
					titleColor='#B98B56'
					numberColor='rgba(185, 139, 86, 0.50)'
					text='We create bespoke interiors that reflect your unique style and elevate your lifestyle. We create bespoke interiors that reflect your unique style and elevate your lifestyle. We create bespoke.'
				/>
				<Step
					number='02'
					title='Concept'
					titleColor='#fff'
					numberColor='rgba(255, 255, 255, 0.50)'
					text='We create bespoke interiors that reflect your unique style and elevate your lifestyle. We create bespoke interiors that reflect your unique style and elevate your lifestyle. We create bespoke.'
				/>
				<Step
					number='03'
					title='Detailing'
					titleColor='#B98B56'
					numberColor='rgba(185, 139, 86, 0.50)'
					text='We create bespoke interiors that reflect your unique style and elevate your lifestyle. We create bespoke interiors that reflect your unique style and elevate your lifestyle. We create bespoke.'
				/>
				<Step
					number='04'
					title='Execute'
					titleColor='#fff'
					numberColor='rgba(255, 255, 255, 0.50)'
					text='We create bespoke interiors that reflect your unique style and elevate your lifestyle. We create bespoke interiors that reflect your unique style and elevate your lifestyle. We create bespoke.'
				/>
			</StepsGrid>
		</Section>
	)
}

const Section = styled.section`
	background: url('/Rectangle10.svg') center/cover no-repeat;
	color: #fff;
	text-align: center;
	padding: 145px 60px 100px;
`

const StepsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 114px;
	justify-items: center;
	margin-top: 426px;

	@media (max-width: 1200px) {
		margin-top: 200px;
		gap: 60px;
	}

	@media (max-width: 1000px) {
		margin-top: 100px;
		grid-template-columns: repeat(2, 1fr);
		gap: 40px;
	}

	@media (max-width: 600px) {
		margin-top: 60px;
		grid-template-columns: 1fr;
		gap: 30px;
	}
`
