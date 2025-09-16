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

	font-size: clamp(4rem, 6vw, 8rem);

	text-align: left;
	color: #fff;
	font-family: Montserrat;

	font-weight: 500;

	@media (max-width: 768px) {
		text-align: center;
		margin: 100px 0 60px 0;
	}
`

const AboutSpan = styled.span`
	font-size: clamp(4rem, 6vw, 8.5rem);

	color: #b98b56;

	font-family: Parisienne;

	font-weight: 400;

	letter-spacing: 5.52px;
`
