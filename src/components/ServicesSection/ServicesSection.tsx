import styled from 'styled-components'

import { ServiceItem } from './ServiceItem'
import { SectionTitle } from './Title'

export const ServicesSection = () => {
	return (
		<Section>
			<SectionTitle />
			<ServicesWrapper>
				<ServiceItem
					number='01'
					title='Design Project Development'
					text='We create bespoke interiors that reflect your unique style and elevate your lifestyle.'
					image='/Rectangle11.svg'
				/>
				<ServiceItem
					number='02'
					title='Architecture Planning'
					text='Unique solutions that combine aesthetics with functionality.'
					image='/Rectangle11.svg'
				/>
				<ServiceItem
					number='03'
					title='Detailing'
					text='Attention to every element to create harmony in space.'
					image='/Rectangle11.svg'
				/>
			</ServicesWrapper>
		</Section>
	)
}

const Section = styled.section`
	background: #000;
	position: relative;
	margin: 200px 96px;

	@media (max-width: 1200px) {
		margin: 150px 60px;
	}

	@media (max-width: 768px) {
		margin: 100px 20px;
	}
`

const ServicesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 60px;

	width: 100%;
	max-width: 1000px;
	margin-left: auto;

	@media (max-width: 1200px) {
		gap: 40px;
		margin: 0 auto;
	}
`
