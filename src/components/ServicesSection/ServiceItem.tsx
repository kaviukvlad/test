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
				<DesktopNumber>{number}</DesktopNumber>

				<MobileTop>
					<Number>{number}</Number>
					<Toggle>{open ? '−' : '+'}</Toggle>
				</MobileTop>

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

				<DesktopToggle>{open ? '−' : '+'}</DesktopToggle>
			</Row>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	color: #fff;

	&:last-child {
		border-bottom: none;
	}
`

const Row = styled.div`
	display: flex;
	align-items: stretch;
	gap: 60px;
	cursor: pointer;
	padding: 30px 0 60px 0;

	@media (max-width: 900px) {
		flex-direction: column;
		gap: 20px;
	}
`

const Number = styled.span`
	color: #b98b56;
	font-family: Montserrat;
	font-size: 20px;
	font-weight: 300;
`

const DesktopNumber = styled(Number)`
	@media (max-width: 900px) {
		display: none;
	}
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

	@media (max-width: 900px) {
		font-size: clamp(1.8rem, 5vw, 36px);
	}
`

const Toggle = styled.span`
	font-size: 28px;
	font-weight: 400;
	cursor: pointer;
`

const DesktopToggle = styled(Toggle)`
	margin-left: auto;
	margin-top: 10px;

	@media (max-width: 900px) {
		display: none;
	}
`

const MobileTop = styled.div`
	display: none;

	@media (max-width: 900px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
`

const MotionImageWrapper = styled(motion.div)`
	overflow: hidden;
	img {
		width: 350px;
		max-width: 100%;
		border-radius: 12px;
		border: 1px solid var(--light, #f4c999);

		box-shadow:
			-17px 13px 35px 0 rgba(244, 201, 153, 0.5) inset,
			0 0 34.6px 4px rgba(244, 201, 153, 0.7);
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
