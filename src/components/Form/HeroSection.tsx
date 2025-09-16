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
	margin-top: 240px;
	height: 1080px;
	background: url('/Rectangle12.svg') center/cover no-repeat;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;

	@media (max-width: 1024px) {
		height: auto;
		margin-top: 120px;
	}

	@media (max-width: 768px) {
		margin-top: 80px;
	}
`

export const Overlay = styled.div`
	width: 100%;
	height: 100%;
	padding: 100px 0 250px 0;
	background: rgba(0, 0, 0, 0.3);
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 1024px) {
		padding: 80px 20px;
	}
`

export const Content = styled.div`
	color: #fff;
	max-width: 700px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`
