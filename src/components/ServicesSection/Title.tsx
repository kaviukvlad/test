import styled from 'styled-components'

const H2 = styled.h2`
	color: #fff;
	font-family: Montserrat;
	font-size: 130px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;

	span {
		color: #b98b56;
		font-family: Parisienne;
		font-size: 180px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
`

export const SectionTitle = () => (
	<H2>
		Ser<span>vic</span>es
	</H2>
)
