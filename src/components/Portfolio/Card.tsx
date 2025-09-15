import { useState } from 'react'
import Masonry from 'react-masonry-css'
import styled from 'styled-components'

const Section = styled.section`
	background: #000;
	padding: 110px 76px 251px 0;
`

const Card = styled.div<{ img: string; tall?: boolean }>`
	position: relative;
	height: ${props => (props.tall ? '1080px' : '547px')};
	border-radius: 12px;
	overflow: hidden;
	background: url(${props => props.img}) center/cover no-repeat;
	display: flex;
	align-items: flex-end;
	padding: 20px;
	color: #fff;
	cursor: pointer;
	transition: transform 0.3s ease;

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0) 60%,
			rgba(0, 0, 0, 0.85) 100%
		);
		z-index: 1;
	}

	&:hover {
		border: 1px solid var(--light, #f4c999);
		box-shadow:
			-17px 13px 35px 0 rgba(244, 201, 153, 0.5) inset,
			0 0 34.6px 4px rgba(244, 201, 153, 0.7);
	}
`

const CardContent = styled.div`
	position: relative;
	z-index: 2;

	h3 {
		color: #fff;
		font-family: Montserrat;
		font-size: 52px;
		font-weight: 500;
		margin: 0;
	}

	p {
		margin: 15px 0 0;
		color: rgba(255, 255, 255, 0.5);
		font-family: Montserrat;
		font-size: 32px;
		font-weight: 400;
	}
`

const breakpointColumnsObj = {
	default: 3,
	1000: 2,
	600: 1
}

// ====== Модалка ======
const ModalOverlay = styled.div`
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.6);
	backdrop-filter: blur(10px);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999;
`

const ModalContent = styled.div`
	position: relative;
	width: 80%;
	max-width: 1000px;
	aspect-ratio: 16/9;
	background: #000;
	border-radius: 12px;
	overflow: hidden;
	box-shadow: 0 0 50px rgba(0, 0, 0, 0.8);

	iframe,
	video {
		width: 100%;
		height: 100%;
		border: none;
	}
`

const CloseButton = styled.button`
	position: absolute;
	top: 15px;
	right: 15px;
	background: rgba(0, 0, 0, 0.6);
	color: #fff;
	border: none;
	font-size: 28px;
	cursor: pointer;
	border-radius: 50%;
	width: 40px;
	height: 40px;
`

export const CardPortfolio = () => {
	const [videoOpen, setVideoOpen] = useState(false)
	const [videoUrl, setVideoUrl] = useState<string | null>(null)

	const openVideo = (url: string) => {
		setVideoUrl(url)
		setVideoOpen(true)
	}

	const closeVideo = () => {
		setVideoUrl(null)
		setVideoOpen(false)
	}

	const isYouTube = (url: string) =>
		url.includes('youtube') || url.includes('youtu.be')

	return (
		<Section>
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className='masonry-grid'
				columnClassName='masonry-grid_column'
			>
				<Card
					img='/Rectangle6.svg'
					onClick={() =>
						openVideo('https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1')
					}
				>
					<CardContent>
						<h3>Project One</h3>
						<p>youtube video</p>
					</CardContent>
				</Card>
				<Card
					img='/Rectangle5.svg'
					tall
					onClick={() => openVideo('/sample.mp4')}
				>
					<CardContent>
						<h3>Project Two</h3>
						<p>local video</p>
					</CardContent>
				</Card>
				<Card img='/Rectangle4.svg'>
					<CardContent>
						<h3>Project Three</h3> <p>project details</p>
					</CardContent>
				</Card>
				<Card
					img='/Rectangle8.svg'
					tall
				>
					<CardContent>
						<h3>Project Four</h3> <p>project details</p>
					</CardContent>
				</Card>
				<Card img='/Rectangle7.svg'>
					<CardContent>
						<h3>Project Five</h3> <p>project details</p>
					</CardContent>
				</Card>
				<Card
					img='/Rectangle9.svg'
					tall
				>
					<CardContent>
						<h3>Project Six</h3> <p>project details</p>
					</CardContent>
				</Card>
			</Masonry>

			{/* Модальне вікно */}
			{videoOpen && (
				<ModalOverlay onClick={closeVideo}>
					<ModalContent onClick={e => e.stopPropagation()}>
						<CloseButton onClick={closeVideo}>×</CloseButton>
						{videoUrl &&
							(isYouTube(videoUrl) ? (
								<iframe
									src={videoUrl}
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen
								/>
							) : (
								<video
									src={videoUrl}
									controls
									autoPlay
								/>
							))}
					</ModalContent>
				</ModalOverlay>
			)}
		</Section>
	)
}
