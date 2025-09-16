import styled from 'styled-components'

import { HeroButtons } from './Button'
import { Title } from './Title'

const HeroSection = styled.section`
	width: 100%;
	min-height: 100vh;
	background-image: url('/src/assets/Rectangle 14.svg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 2rem;
	box-sizing: border-box;
`

export const Hero = () => {
	return (
		<HeroSection>
			<Title />
			<HeroButtons />
		</HeroSection>
	)
}
