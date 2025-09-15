import styled from 'styled-components'

import { HeroForm } from './HeroForm'
import { HeroTitle } from './HeroTitle'

export const HeroSection = () => {
	return (
		<Section>
			<Overlay>
				<Content>
					<HeroTitle />
					<HeroForm />
				</Content>
			</Overlay>
		</Section>
	)
}

export const Section = styled.section`
	margin-top: 1500px;
	height: 1080px;
	background: url('/Rectangle12.svg') center/cover no-repeat;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`

export const Overlay = styled.div`
	width: 100%;
	height: 100%;
	padding: 100px 0 250px 0;
	background: rgba(0, 0, 0, 0.3);
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Content = styled.div`
	color: #fff;
	max-width: 700px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`
