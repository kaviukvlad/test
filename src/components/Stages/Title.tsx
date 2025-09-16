import styled from 'styled-components'

const Title = styled.h2`
	color: #fff;
	font-family: Montserrat;
	font-size: clamp(4rem, 6vw, 130px);
	font-weight: 500;

	span {
		color: #b98b56;
		font-family: Parisienne;
		font-size: clamp(3rem, 7vw, 138px);
		font-weight: 400;
	}
`

export const SectionTitle = () => {
	return (
		<Title>
			Stages <span>of</span> Work
		</Title>
	)
}
