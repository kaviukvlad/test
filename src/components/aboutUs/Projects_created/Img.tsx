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
	align-items: center;
	justify-content: left;
	gap: 130px; /* базовий відступ */

	@media (min-width: 1600px) {
		gap: 260px; /* на дуже великих екранах */
	}

	@media (max-width: 1440px) {
		gap: 80px; /* на стандартних ноутбуках */
	}

	@media (max-width: 1024px) {
		flex-direction: column;
		text-align: center;
		gap: 24px; /* компактніше */
	}
`

const Thumb = styled.img`
	width: 100%;
	max-width: 832px;
	height: auto;
	object-fit: cover;
	border: 1px solid var(--light, #f4c999);
	box-shadow:
		-17px 13px 35px 0 rgba(244, 201, 153, 0.5) inset,
		0 0 34.6px 4px rgba(244, 201, 153, 0.7);

	@media (max-width: 1440px) {
		max-width: 600px;
	}

	@media (max-width: 768px) {
		max-width: 100%;
	}
`

const StatText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 10px;

	h2 {
		color: #b98b56;
		font-family: Montserrat;
		font-size: clamp(2.5rem, 5vw, 6rem);
		font-weight: 500;
		margin: 0;
	}

	p {
		color: #fff;
		font-family: Montserrat;
		font-size: clamp(1rem, 2vw, 2rem);
		font-weight: 400;
		margin: 0;
	}

	@media (max-width: 1024px) {
		align-items: center;
	}
`
