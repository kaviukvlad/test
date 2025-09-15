import styled from 'styled-components'

export const Title = () => {
	return (
		<Titleh2>
			Portfo<AboutSpan>lio</AboutSpan>
		</Titleh2>
	)
}

const Titleh2 = styled.h2`
	margin: 214px 0 110px 150px;
	display: block;
	font-family: 'Montserrat', sans-serif;
	font-size: 8.125rem;
	font-weight: 500;
	color: #fff;
`

const AboutSpan = styled.span`
	font-family: 'Parisienne', sans-serif;
	font-size: 8.625rem;
	font-weight: 400;
	color: #b98b56;
`
