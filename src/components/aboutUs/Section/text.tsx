import styled from 'styled-components'

const Section = styled.section`
	padding-left: 159px;
	padding-top: 150px;
`

const ContentFlex = styled.div`
	display: flex;
	gap: 65px;
	align-items: flex-start;
`

const LeftBlock = styled.div`
	color: #fff;
	font-weight: lighter;
	font-size: 22px;
`

const Title = styled.h2`
	display: block;
	font-family: 'Montserrat', sans-serif;
	font-size: 8.125rem;
	font-weight: 500;
	color: #fff;
	margin-top: 0;
	margin-bottom: 40px;
`

const AboutSpan = styled.span`
	font-family: 'Parisienne', sans-serif;
	font-size: 8.625rem;
	font-weight: 400;
	color: #b98b56;
`

const Paragraphs = styled.div`
	display: flex;
	gap: 65px;
	padding-top: 150px;

	p {
		color: #fff;
		font-family: Montserrat;
		font-size: 22px;
		font-style: normal;
		font-weight: 300;
		line-height: normal;
	}
`

const Image = styled.img`
	width: 610px;
	height: 581px;
	margin-left: 278px;
	margin-right: 100px;
	padding-top: 0px;
	border: 1px solid #f4c999;
	box-shadow:
		-17px 13px 35px 0 rgba(244, 201, 153, 0.5) inset,
		0 0 34.6px 4px rgba(244, 201, 153, 0.7);
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
							your unique style and elevate your lifestyle. We create bespoke
							interiors that reflect your unique style and elevate your
							lifestyle.
						</p>
						<p>
							We create bespoke interiors that reflect your unique style and
							elevate your lifestyle. We create bespoke interiors that reflect
							your unique style and elevate your lifestyle. We create bespoke
							interiors that reflect your unique style and elevate your
							lifestyle.
						</p>
					</Paragraphs>
				</LeftBlock>

				<div>
					<Image
						src='/Rectangle 1.svg'
						alt='Interior Design'
					/>
				</div>
			</ContentFlex>
		</Section>
	)
}
