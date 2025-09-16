import styled from 'styled-components'

export const HeroForm = () => {
	return (
		<Form>
			<FormGroup>
				<Input
					type='text'
					placeholder=' '
					required
				/>
				<Label>Name</Label>
			</FormGroup>

			<FormGroup>
				<Input
					type='tel'
					placeholder=' '
					required
				/>
				<Label>Phone Number</Label>
			</FormGroup>

			<FormGroup>
				<Input
					type='text'
					placeholder=' '
					required
				/>
				<Label>Project Type</Label>
			</FormGroup>

			<Button id='btn'>Schedule Consultation</Button>
		</Form>
	)
}

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 56px;
	width: 100%;
	max-width: 1000px;
	padding-top: 80px;

	@media (max-width: 768px) {
		gap: 32px;
		padding-top: 40px;
	}
`

const FormGroup = styled.div`
	position: relative;
	width: 100%;
`

const Input = styled.input`
	width: 100%;
	background: transparent;
	border: none;
	border-bottom: 2px solid rgba(255, 255, 255, 0.5);
	padding: 26px 0 0;
	outline: none;
	transition: all 0.3s ease;
	color: rgba(255, 255, 255, 0.7);
	font-family: Montserrat;
	font-size: clamp(1rem, 4vw, 30px);
	font-weight: 400;

	&::placeholder {
		color: rgba(255, 255, 255, 0.5);
	}

	&:focus {
		border-bottom: 2px solid #b98b56;
		box-shadow: 0 0 1px -2px #f4c999;
	}

	&:focus ~ label,
	&:not(:placeholder-shown) ~ label {
		top: -10px;
		font-size: 16px;
		color: rgba(255, 255, 255, 0.7);
	}
`

const Label = styled.label`
	position: absolute;
	left: 0;
	padding-left: 40px;
	pointer-events: none;
	transition: all 0.3s ease;
	color: rgba(255, 255, 255, 0.7);
	font-family: Montserrat;
	font-size: clamp(1rem, 4vw, 30px);
	font-weight: 400;
`

const Button = styled.button`
	cursor: pointer;
	transition: all 0.3s ease;
	display: flex;
	justify-content: center;
	align-items: center;

	width: 458px;
	height: 83px;
	padding: 23px 55px;
	flex-shrink: 0;
	border-radius: 14px;
	border: 1px solid var(--light, #f4c999);
	background: #b98b56;
	box-shadow:
		-17px 13px 35px 0 rgba(244, 201, 153, 0.5) inset,
		0 0 34.6px 4px rgba(244, 201, 153, 0.7);
	color: #fff;
	font-family: Montserrat;
	font-size: clamp(1rem, 4vw, 30px);
	font-weight: 500;
	margin: 0 auto;

	@media (max-width: 768px) {
		width: 100%;
		height: 65px;
		font-size: 18px;
	}
`
