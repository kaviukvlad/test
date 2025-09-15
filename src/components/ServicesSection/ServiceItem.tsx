import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import styled from 'styled-components'

interface ServiceItemProps {
	number: string
	title: string
	text: string
	image: string
}

export const ServiceItem = ({
	number,
	title,
	text,
	image
}: ServiceItemProps) => {
	const [open, setOpen] = useState(false)

	return (
		<Wrapper>
			<Row onClick={() => setOpen(!open)}>
				<Number>{number}</Number>

				<TitleBlock>
					<Title>{title}</Title>

					<AnimatePresence initial={false}>
						{open && (
							<MotionTextWrapper
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: 'auto', opacity: 1 }}
								exit={{ height: 0, opacity: 0 }}
								transition={{ duration: 0.6, ease: 'easeInOut' }}
							>
								<Text>{text}</Text>
							</MotionTextWrapper>
						)}
					</AnimatePresence>
				</TitleBlock>

				<AnimatePresence>
					{open && (
						<MotionImageWrapper
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: 'auto', opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ duration: 0.6, ease: 'easeInOut' }}
						>
							<img
								src={image}
								alt={title}
							/>
						</MotionImageWrapper>
					)}
				</AnimatePresence>

				<Toggle>{open ? '−' : '+'}</Toggle>
			</Row>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	color: #fff;
	margin: 0;
	padding: 0;

	&:last-child {
		border-bottom: none;
	}
`

const Row = styled.div`
	display: flex;
	align-items: stretch;
	gap: 60px;
	cursor: pointer;
	margin: 0;
	padding: 30px 0 60px 0;
`

const Number = styled.span`
	color: #b98b56;
	font-family: Montserrat;
	font-size: 20px;
	font-weight: 300;
	margin-top: 10px;
`

const TitleBlock = styled.div`
	flex: 1;
	max-width: 500px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

const Title = styled.h3`
	margin: 0 0 20px 0;
	color: #fff;
	font-family: Montserrat;
	font-size: 52px;
	font-weight: 500;
	text-align: left;
`

const Toggle = styled.span`
	font-size: 28px;
	font-weight: 400;
	margin-left: auto;
	margin-top: 10px;
`

const MotionImageWrapper = styled(motion.div)`
	overflow: hidden;
	img {
		width: 350px;
		border-radius: 12px;
		box-shadow: 0 0 30px rgba(244, 201, 153, 0.6);
		display: block;
	}
`

const MotionTextWrapper = styled(motion.div)`
	overflow: hidden;
`

const Text = styled.p`
	font-size: 18px;
	line-height: 1.5;
	color: rgba(255, 255, 255, 0.7);
	margin: 0;
`
