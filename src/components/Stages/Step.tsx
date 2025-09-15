import styled from 'styled-components'

const Wrapper = styled.div`
	text-align: left;
	max-width: 300px;
`

const Title = styled.h3<{ $titleColor?: string; $numberColor?: string }>`
	padding-top: 426px;

	font-family: Montserrat;
	font-size: 52px;
	font-weight: 400;
	line-height: normal;
	margin: 0 0 27px;

	display: inline-flex;
	align-items: baseline;
	gap: 57px;

	.t {
		color: ${({ $titleColor }) => $titleColor ?? '#B98B56'};
		font-family: Montserrat;
		font-size: 52px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}

	.n {
		color: ${({ $numberColor }) => $numberColor ?? 'rgba(255, 255, 255, 0.50)'};
		text-shadow: 0 0 34.6px rgba(244, 201, 153, 0.7);
		font-family: Montserrat;
		font-size: 52px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
`

const Text = styled.p`
	color: #fff;
	font-family: Montserrat;
	font-size: 22px;
	font-weight: 300;
	line-height: normal;
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
