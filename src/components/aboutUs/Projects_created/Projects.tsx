import styled from 'styled-components'

import { Img } from './Img'
import { Stats } from './Stats'

export const Projects = () => {
	return (
		<Section>
			<Stats />
			<Img />
		</Section>
	)
}

const Section = styled.section`
	margin: 214px 160px 82px 160px;
	display: flex;
	flex-direction: column;
	gap: 80px;

	@media (max-width: 1024px) {
		margin: 120px 60px 60px 60px;
		gap: 60px;
	}

	@media (max-width: 768px) {
		margin: 80px 20px 40px 20px;
		gap: 40px;
	}
`
