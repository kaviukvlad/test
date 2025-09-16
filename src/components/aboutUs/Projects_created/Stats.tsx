import styled from 'styled-components'

const Section = styled.section`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 60px;

	@media (max-width: 1200px) {
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 40px;
	}

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		text-align: center;
		grid-gap: 30px;
	}
`

const StatBlock = styled.div`
	h2 {
		color: #b98b56;
		font-family: Montserrat;
		font-size: clamp(2.5rem, 5vw, 6rem);
		font-weight: 500;
		margin: 0 0 10px 0;
	}

	p {
		color: #fff;
		font-family: Montserrat;
		font-size: clamp(1rem, 2vw, 2rem);
		font-weight: 400;
		margin: 0;
	}
`

export const Stats = () => {
	return (
		<Section>
			<StatBlock>
				<h2>250+</h2>
				<p>Projects created</p>
			</StatBlock>
			<StatBlock>
				<h2>250+</h2>
				<p>Happy Clients</p>
			</StatBlock>
			<StatBlock>
				<h2>250+</h2>
				<p>Years Experience</p>
			</StatBlock>
		</Section>
	)
}
