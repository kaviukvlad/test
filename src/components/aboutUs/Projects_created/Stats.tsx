import styled from 'styled-components'

const Section = styled.section`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 60px;

	@media (max-width: 900px) {
		grid-template-columns: 1fr;
		text-align: center;
	}
`

const StatBlock = styled.div`
	h2 {
		color: #b98b56;
		font-family: Montserrat;
		font-size: 107.55px;

		font-weight: 500;

		margin: 0 0 10px 0;
	}

	p {
		color: #fff;
		font-family: Montserrat;
		font-size: 40px;

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
				<p>Projects created</p>
			</StatBlock>
			<StatBlock>
				<h2>250+</h2>
				<p>Projects created</p>
			</StatBlock>
		</Section>
	)
}
