import styled from 'styled-components'

import { Logo } from './Logo'
import { Navigation } from './Navigation'

const HeaderWrapper = styled.header`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 10;
	background: transparent;
	padding-top: 2.125rem;
	padding-bottom: 2.813rem;
`

const Container = styled.div`
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	padding-left: 72px;
	padding-right: 72px;

	@media (max-width: 1024px) {
		padding-left: 40px;
		padding-right: 40px;
	}

	@media (max-width: 768px) {
		padding-left: 20px;
		padding-right: 20px;
	}
`

const Border = styled.div`
	height: 1px;
	background-color: #fff;
	margin: 0 72px;
	margin-top: 45px;

	@media (max-width: 1024px) {
		margin: 0 40px;
		margin-top: 30px;
	}

	@media (max-width: 768px) {
		margin: 0 20px;
		margin-top: 20px;
	}
`

export const Header = () => {
	return (
		<HeaderWrapper>
			<Container>
				<Logo />
				<Navigation />
			</Container>
			<Border />
		</HeaderWrapper>
	)
}
