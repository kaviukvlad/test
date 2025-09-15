import styled from 'styled-components'

export const HeroForm = () => {
	return (
		<Form>
			<Input
				type='text'
				placeholder='Name'
			/>
			<Input
				type='tel'
				placeholder='Phone Number'
			/>
			<Input
				type='text'
				placeholder='Project Type'
			/>
			<Button>Schedule Consultation</Button>
		</Form>
	)
}

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 100%;
	max-width: 400px;
	margin-button: 245px;
`

const Input = styled.input`
	background: transparent;
	border: none;
	border-bottom: 1px solid rgba(255, 255, 255, 0.5);
	padding: 10px 0;
	font-size: 1rem;
	color: #fff;
	outline: none;

	&::placeholder {
		color: rgba(255, 255, 255, 0.5);
	}
`

const Button = styled.button`
	background: #b98b56;
	border: none;
	border-radius: 8px;
	padding: 15px;
	font-size: 1rem;
	font-weight: 500;
	color: #fff;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		background: #d9a766;
	}
`
