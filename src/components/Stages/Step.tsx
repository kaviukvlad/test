import styled from 'styled-components'

const Wrapper = styled.div`
	text-align: left;
	max-width: 300px;

	@media (max-width: 600px) {
		max-width: 100%;
		text-align: center;
	}
`

const Title = styled.h3<{ $titleColor?: string; $numberColor?: string }>`
	padding-top: 80px;

	font-family: Montserrat;
	font-size: clamp(1.8rem, 4vw, 52px);
	font-weight: 400;
	margin: 0 0 20px;

	display: inline-flex;
	align-items: baseline;
	gap: 30px;

	.t {
		color: ${({ $titleColor }) => $titleColor ?? '#B98B56'};
		font-family: Montserrat;
		font-weight: 500;
	}

	.n {
		color: ${({ $numberColor }) => $numberColor ?? 'rgba(255, 255, 255, 0.50)'};
		text-shadow: 0 0 34.6px rgba(244, 201, 153, 0.7);
	}
`

const Text = styled.p`
	color: #fff;
	font-family: Montserrat;
	font-size: clamp(1rem, 2vw, 22px);
	font-weight: 300;
	line-height: 1.5;

	@media (max-width: 600px) {
		text-align: center;
	}
`

interface StepProps {
	number: string
	title: string
	text: string
	titleColor?: string
	numberColor?: string
}

export const Step = ({
	number,
	title,
	text,
	titleColor,
	numberColor
}: StepProps) => (
	<Wrapper>
		<Title
			$titleColor={titleColor}
			$numberColor={numberColor}
		>
			<span className='t'>{title}</span>
			<span className='n'>{number}</span>
		</Title>
		<Text>{text}</Text>
	</Wrapper>
)
