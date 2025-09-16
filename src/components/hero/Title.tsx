import styled from 'styled-components'

const Content = styled.section`
	display: flex;

	@media (max-width: 1024px) {
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
`

const TitleWrapper = styled.div`
	h1 {
		color: #fff;
		font-family: Montserrat;
		font-size: 130px;
		font-weight: 500;
		line-height: 151px;
		padding: 238px 0 0 148px;
		margin: 0;

		@media (max-width: 1440px) {
			font-size: 90px;
			line-height: 110px;
			padding: 180px 0 0 80px;
		}

		@media (max-width: 768px) {
			font-size: 56px;
			line-height: 64px;
			padding: 100px 0 0 0;
		}

		@media (max-width: 480px) {
			font-size: 40px;
			line-height: 48px;
		}
	}

	.interior-font {
		color: #b98b56;
		font-family: Parisienne;
		font-size: 138px;
		font-weight: 400;
		line-height: 151px;

		@media (max-width: 1440px) {
			font-size: 90px;
			line-height: 110px;
		}

		@media (max-width: 768px) {
			font-size: 56px;
			line-height: 64px;
		}

		@media (max-width: 480px) {
			font-size: 40px;
			line-height: 48px;
		}
	}
`

const Subtitle = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	width: 100%;

	p {
		color: #fff;
		text-align: right;
		font-family: Montserrat;
		font-size: 32px;
		font-weight: 400;
		padding: 402px 88px 0 0;
		margin: 0;

		@media (max-width: 1440px) {
			font-size: 24px;
			padding: 300px 40px 0 0;
			justify-content: center;
		}

		@media (max-width: 768px) {
			font-size: 18px;
			text-align: center;
			padding: 40px 20px 20px 20px;
			justify-content: center;
		}

		@media (max-width: 480px) {
			font-size: 16px;
			padding: 20px 10px 15px 10px;
			justify-content: center;
		}
	}

	@media (max-width: 768px) {
		justify-content: center;
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
