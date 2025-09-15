import styled from 'styled-components'

const Title = styled.h2`
	color: #fff;
	font-family: Montserrat;
	font-size: 130px;
	font-weight: 500;
	padding-top: 145px;
	span {
		color: #b98b56;
		font-family: Parisienne;
		font-size: 138px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
`

export const SectionTitle = () => {
	return (
		<Title>
			Stages <span>of</span> Work
		</Title>
	)
}
