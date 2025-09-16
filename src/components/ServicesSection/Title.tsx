import styled from 'styled-components'

const H2 = styled.h2`
	color: #fff;
	font-family: Montserrat;
	font-size: clamp(4rem, 6vw, 130px);
	font-weight: 500;
	line-height: 1.2;

	span {
		color: #b98b56;
		font-family: Parisienne;
		font-size: clamp(4rem, 7vw, 180px);
		font-weight: 400;
	}
	@media (max-width: 768px) {
		text-align: center;
	}
`

export const SectionTitle = () => (
	<H2>
		Ser<span>vic</span>es
	</H2>
)
