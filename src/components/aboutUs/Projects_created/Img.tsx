import styled from 'styled-components'

export const Img = () => {
	return (
		<RowBlock>
			<Thumb
				src='/Rectangle 1 (1).svg'
				alt='Office'
			/>
			<StatText>
				<h2>250+</h2>
				<p>Projects created</p>
			</StatText>
		</RowBlock>
	)
}

const RowBlock = styled.div`
	display: flex;

	gap: 24px;
`

const Thumb = styled.img`
	width: 832px;
	height: 229px;
	flex-shrink: 0;
	border: 1px solid var(--light, #f4c999);

	box-shadow:
		-17px 13px 35px 0 rgba(244, 201, 153, 0.5) inset,
		0 0 34.6px 4px rgba(244, 201, 153, 0.7);
`

const StatText = styled.div`
	padding-left: 226px;

	h2 {
		color: #b98b56;
		font-family: Montserrat;
		font-size: 107.55px;
		font-weight: 500;
	}

	p {
		color: #fff;
		font-family: Montserrat;
		font-size: 40px;
		font-weight: 400;
	}
`
