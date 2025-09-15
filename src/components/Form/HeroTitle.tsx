import styled from 'styled-components'

export const HeroTitle = () => {
	return (
		<Title>
			Want Your <span className='highlight'>Interior</span> <br />
			to <span className='italic'>Feel</span> Brand New?
		</Title>
	)
}

const Title = styled.h1`
	width: 1500px;
	color: #fff;
	text-align: center;
	font-family: Montserrat;
	font-size: 130px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;

	.highlight {
		color: #b98b56;
		font-family: Parisienne;
		font-size: 138px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	.italic {
		color: #b98b56;
		font-family: Parisienne;
		font-size: 138px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
`
