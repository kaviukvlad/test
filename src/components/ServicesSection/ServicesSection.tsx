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
					text='We create bespoke interiors that reflect your unique style and elevate your lifestyle.We create bespoke interiors that reflect your unique style and elevate your lifestyle.We create bespoke '
					image='/Rectangle11.svg'
				/>
				<ServiceItem
					number='02'
					title='Design Project Development'
					text='We create bespoke interiors that reflect your unique style and elevate your lifestyle.We create bespoke interiors that reflect your unique style and elevate your lifestyle.We create bespoke '
					image='/Rectangle11.svg'
				/>
				<ServiceItem
					number='03'
					title='Design Project Development'
					text='We create bespoke interiors that reflect your unique style and elevate your lifestyle.We create bespoke interiors that reflect your unique style and elevate your lifestyle.We create bespoke '
					image='/Rectangle11.svg'
				/>
				<ServiceItem
					number='04'
					title='Design Project Development'
					text='We create bespoke interiors that reflect your unique style and elevate your lifestyle.We create bespoke interiors that reflect your unique style and elevate your lifestyle.We create bespoke '
					image='/Rectangle11.svg'
				/>
				<ServiceItem
					number='05'
					title='Design Project Development'
					text='We create bespoke interiors that reflect your unique style and elevate your lifestyle.We create bespoke interiors that reflect your unique style and elevate your lifestyle.We create bespoke '
					image='/Rectangle11.svg'
				/>
				<ServiceItem
					number='06'
					title='Design Project Development'
					text='We create bespoke interiors that reflect your unique style and elevate your lifestyle.We create bespoke interiors that reflect your unique style and elevate your lifestyle.We create bespoke '
					image='/Rectangle11.svg'
				/>
			</ServicesWrapper>
		</Section>
	)
}

const Section = styled.section`
	background: #000;
	position: relative;
	margin: 241px 96px 247px 176px;
`

const ServicesWrapper = styled.div`
	position: absolute;
	top: 227px;
	right: 60px;
	width: 1000px;

	display: flex;
	flex-direction: column;
`
