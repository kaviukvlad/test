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
`
