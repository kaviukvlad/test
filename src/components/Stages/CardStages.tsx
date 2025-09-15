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
					text='We create bespoke interiors that reflect your unique style and elevate your lifestyle.We create bespoke interiors that reflect your unique style and elevate your lifestyle.We create bespoke '
				/>
				<Step
					number='02'
					title='Concept'
					titleColor='#fff'
					numberColor='rgba(255, 255, 255, 0.50)'
					text='We create bespoke interiors that reflect your unique style and elevate your lifestyle.We create bespoke interiors that reflect your unique style and elevate your lifestyle.We create bespoke '
				/>
				<Step
					number='03'
					title='Detailing'
					titleColor='#B98B56'
					numberColor='rgba(185, 139, 86, 0.50)'
					text='We create bespoke interiors that reflect your unique style and elevate your lifestyle.We create bespoke interiors that reflect your unique style and elevate your lifestyle.We create bespoke '
				/>
				<Step
					number='04'
					title='Execute'
					titleColor='#fff'
					numberColor='rgba(255, 255, 255, 0.50)'
					text='We create bespoke interiors that reflect your unique style and elevate your lifestyle.We create bespoke interiors that reflect your unique style and elevate your lifestyle.We create bespoke '
				/>
			</StepsGrid>
		</Section>
	)
}
const Section = styled.section`
	background: url('/Rectangle10.svg') center/cover no-repeat;

	position: relative;
	color: #fff;
	text-align: center;

	height: 1138px;
	flex-shrink: 0;
`
const StepsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 114px;
	justify-items: center;
	margin: 0 79px 1110px 61px;
	@media (max-width: 1000px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`
