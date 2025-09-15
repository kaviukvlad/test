import styled from 'styled-components'

const Content = styled.section`
	display: flex;
`

const TitleWrapper = styled.div`
	h1 {
		font-family: 'Montserrat', sans-serif;
		font-size: 8.125rem;
		color: #fff;
		padding: 230px 0 0 148px;
		font-weight: 500;
	}

	.interior-font {
		font-family: 'Parisienne', serif;
		color: #b98b56;
	}
`

const Subtitle = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	width: 100%;

	p {
		font-size: 2rem;
		font-family: 'Montserrat', sans-serif;
		text-align: right;
		color: #fff;
		padding: 402px 88px 0 0;
	}
`

export const Title = () => {
	return (
		<Content>
			<TitleWrapper>
				<h1>
					Luxury, Digital <br />
					<span className='interior-font'>Interior</span> Design
				</h1>
			</TitleWrapper>
			<Subtitle>
				<p>
					Transform your home into a <br />
					masterpiece of elegance and <br />
					sophistication.
				</p>
			</Subtitle>
		</Content>
	)
}
