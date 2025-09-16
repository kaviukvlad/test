import styled from 'styled-components'

const LogoWrapper = styled.div`
	flex-shrink: 0;
`

const LogoText = styled.h1`
	font-family: 'Montserrat';
	margin: 0;
	color: #fff;
	font-size: 56px;
	font-weight: 500;

	@media (max-width: 1024px) {
		font-size: 40px;
	}

	@media (max-width: 768px) {
		font-size: 32px;
	}
`

export const Logo = () => {
	return (
		<LogoWrapper>
			<LogoText>Logo</LogoText>
		</LogoWrapper>
	)
}
