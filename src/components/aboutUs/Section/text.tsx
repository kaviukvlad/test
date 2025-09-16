import styled from 'styled-components'

const Section = styled.section`
	padding: 150px 160px 0 160px;

	@media (max-width: 1440px) {
		padding: 120px 80px 0 80px;
	}

	@media (max-width: 1024px) {
		padding: 100px 40px 0 40px;
	}

	@media (max-width: 768px) {
		padding: 60px 20px;
	}
`

const ContentFlex = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	gap: 65px;

	@media (max-width: 1024px) {
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 40px;
	}
`

const LeftBlock = styled.div`
	color: #fff;
	flex: 1; /* займає всю доступну ширину */
	max-width: 800px;
`

const Title = styled.h2`
	font-size: 8.125rem;
	color: #fff;
	margin: 0 0 80px 0;
	font-family: Montserrat, sans-serif;
	font-weight: 500;

	@media (max-width: 1440px) {
		font-size: 5.5rem;
	}

	@media (max-width: 1024px) {
		font-size: 5rem;
	}

	@media (max-width: 768px) {
		font-size: 3.5rem;
	}

	@media (max-width: 480px) {
		font-size: 2.5rem;
	}
`

const AboutSpan = styled.span`
	font-size: 8.625rem;
	font-family: Parisienne, cursive;
	font-weight: 400;
	color: #b98b56;

	@media (max-width: 1440px) {
		font-size: 5.5rem;
	}

	@media (max-width: 1024px) {
		font-size: 5rem;
	}

	@media (max-width: 768px) {
		font-size: 3.5rem;
	}

	@media (max-width: 480px) {
		font-size: 2.5rem;
	}
`

const Paragraphs = styled.div`
	display: flex;
	gap: 40px;
	margin-top: 0;

	p {
		color: #fff;
		font-family: Montserrat, sans-serif;
		font-size: 22px;
		font-weight: 300;
		line-height: 1.5;
	}

	@media (max-width: 1024px) {
		flex-direction: column;
		gap: 20px;

		p {
			font-size: 18px;
		}
	}

	@media (max-width: 480px) {
		p {
			font-size: 16px;
		}
	}
`

const Image = styled.img`
	flex-shrink: 0;
	width: 610px;
	height: auto;
	border: 1px solid #f4c999;
	box-shadow:
		-17px 13px 35px 0 rgba(244, 201, 153, 0.5) inset,
		0 0 34.6px 4px rgba(244, 201, 153, 0.7);

	@media (max-width: 1440px) {
		width: 500px;
	}

	@media (max-width: 1024px) {
		width: 100%;
		max-width: 600px;
		margin: 0 auto;
	}

	@media (max-width: 768px) {
		max-width: 100%;
	}
`

export const Text = () => {
	return (
		<Section>
			<ContentFlex>
				<LeftBlock>
					<Title>
						About <AboutSpan>Us</AboutSpan>
					</Title>

					<Paragraphs>
						<p>
							We create bespoke interiors that reflect your unique style and
							elevate your lifestyle. We create bespoke interiors that reflect
							your unique style and elevate your lifestyle.
						</p>
						<p>
							We create bespoke interiors that reflect your unique style and
							elevate your lifestyle. We create bespoke interiors that reflect
							your unique style and elevate your lifestyle.
						</p>
					</Paragraphs>
				</LeftBlock>

				<Image
					src='/Rectangle 1.svg'
					alt='Interior Design'
				/>
			</ContentFlex>
		</Section>
	)
}
