import React from 'react'

import Button from '../../../Components/Button'
import {
	Background,
	Container,
	InputContainer,
	Label,
	Input
} from './styles'

const ProxyModal = React.forwardRef(({ visible }, ref) => {

	return (

		<Background ref={ref} visible={visible}>
			<Container>
				<InputContainer>
					<Label>Host:</Label>
					<Input />
				</InputContainer>

				<InputContainer>
					<Label>Porta: </Label>
					<Input />
				</InputContainer>

				<InputContainer>
					<Label>Login: </Label>
					<Input />
				</InputContainer>

				<InputContainer>
					<Label>Senha: </Label>
					<Input />
				</InputContainer>
				<p>Se o login for por ip, não coloque nada em 'Login' e 'Senha'</p>
				<Button>Salvar</Button>
			</Container>
		</Background>
	)
})


export default ProxyModal
